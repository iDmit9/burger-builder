import React, { useEffect, Suspense, lazy } from 'react';
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

function App(props) {   
  const { onTryAutoSignup } = props;

   useEffect(() => {
      onTryAutoSignup()
   }, [onTryAutoSignup])

   let routes = (
      <Switch>
         <Route path='/auth' component={asyncAuth} />
         <Route path='/' exact component={BurgerBuilder} />
         <Redirect to='/' />
      </Switch>
   )
   if (props.isAuthenticated) {
      routes = (
         <Switch>
            <Route path='/checkout' component={asyncCheckout} />
            <Route path='/orders' component={asyncOrders} />
            <Route path='/logout' component={Logout} />
            <Route path='/auth' component={asyncAuth} />
            <Route path='/' exact component={BurgerBuilder} />
            <Redirect to='/' />
         </Switch>
      )
   }

   return (
      <div>
         <Layout>
            <Suspense fallback={<div><Spinner /></div>}>
               {routes}
            </Suspense>
         </Layout>
      </div>
   );
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