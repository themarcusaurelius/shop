import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
//Helps store user authentication on state
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  state = { 
    currentUser: null
  }

  unsubscribeFromAuth = null

  //On Signin
  componentDidMount() {
    //Method on firebase library
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  //On Signout
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  } 
}

export default App;
