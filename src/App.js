import React,{ useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{},dispatch] = useStateValue()

  useEffect(()=>{
      auth.onAuthStateChanged(authUser =>{
        console.log('The user Is:',authUser);

        if(authUser){
          // user is or was logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }else{
          // user is logged out
          dispatch({
            type: 'SET_USER',
            user: null,
          })
        }
      })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path='/login'>
              <Login/>
            </Route> 
            <Route path='/checkout'>
              <Header/>
              <Checkout/>
            </Route> 

          <Route path='/'>
              <Header/>
              <Home/>
          </Route> 

          
        </Switch>
        
    </div>
    </Router>
    
  );
}

export default App;
