import './bootstrap/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import './MorePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";





import Login from './Login';
import Register from './Register';
import Profile from './Profile';

import EditItem from './EditItem';
import Items from './Items';
import MorePage from './MorePage';



function App() {
  return (
    <div>
      <Router>
      
        <Switch>
                <Route path = "/home">
                  
                  <Content />
                </Route>

                <Route path = {`/MorePage/:itemId`}>
                  <Navbar2/>
                  <MorePage/>
                  <Footer/>
                </Route>

                <Route path = "/login">
                  <Navbar2/>
                <Login/>
                <Footer/>
                </Route>
                <Route path = "/register2">
                <Navbar2/>
                <Register/>
                <Footer/>
                </Route>
               
                <Route path = {`/profile`}>
                  <Navbar2/>
                  <Profile/>
                  <Footer/>
                </Route>

                <Route path = {`/edititem/:itemId`}>
                  <Navbar2/>
                  <EditItem/>
                  <Footer/>
                </Route>
                <Route path = "/">
                  <Navbar2/>
                  <Items/>
                  <Footer/>
                </Route>

                

 





              </Switch>
        
        </Router>
    </div>
  );
}

export default App;
