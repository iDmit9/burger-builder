//Компонент высшего порядка (Higher-Order Component, HOC)
import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
   const [isVisible, setIsVisible] = useState(false);

   const sideDrawerClosedHandler = () => {
      setIsVisible(false)
   }

   const sideDrawerToggleHandler = () => {
      setIsVisible(!isVisible);
   }

   return (
      <>
         <Toolbar
            isAuth={props.isAuthenticated}
            drawerToggleClicked={sideDrawerToggleHandler}
         />
         <SideDrawer
            isAuth={props.isAuthenticated}
            open={isVisible}
            closed={sideDrawerClosedHandler}
         />
         <main className={classes.Content}>
            {props.children}
         </main>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      isAuthenticated: state.auth.token !== null
   }
}

export default connect(mapStateToProps)(Layout);