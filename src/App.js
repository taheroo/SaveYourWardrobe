import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import Home from './Home';
import HomeAfterLogin from './HomeAfterLogin';
import LoginPage from './components/Login/LoginPage';
import AddNewItem from './components/Items/AddNewItem';
import Donations from './components/Donations/Donations';
function App() {
  



  return (
   <Router>
     <Route path="/" exact component={Home} />
     <Route path="/login" exact component={LoginPage} />
     <Route path="/addItem" exact component={AddNewItem} />
     
     <Route path="/home" component={HomeAfterLogin} />
   </Router>
  );
}

export default App;
