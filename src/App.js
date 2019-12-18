import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Spinner from './components/UI/Spinner/Spinner';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const asyncCheckout = lazy(() => import('./containers/Checkout/Checkout'));
const asyncOrders = lazy(() => import('./containers/Orders/Orders'));
const asyncAuth = lazy(() => import('./containers/Auth/Auth'));

//function App() {
class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    let routes = (
      <Suspense fallback={<div><Spinner /></div>}>
        <Switch>
          <Route path='/auth' component={asyncAuth} />
          <Route path='/' exact component={BurgerBuilder} />
          <Redirect to='/' />
        </Switch>
      </Suspense>
    )
    if (this.props.isAuthenticated) {
      routes = (
        <Suspense fallback={<div><Spinner /></div>}>
          <Switch>
            <Route path='/checkout' component={asyncCheckout} />
            <Route path='/orders' component={asyncOrders} />
            <Route path='/logout' component={Logout} />
            <Route path='/auth' component={asyncAuth} />
            <Route path='/' exact component={BurgerBuilder} />
            <Redirect to='/' />
          </Switch>
        </Suspense>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));