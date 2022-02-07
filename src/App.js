import React from 'react'
import './App.css';

import Navbar from './components/Navbar'  
import DisplayTodo from './components/DisplayTodo';
import CreateTodo from './components/CreateTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Personaldetails from './components/Personaldetails';


function App(props) {

  return (
    <>

      {/* <DisplayTodo /> */}
      {/* <CreateTodo/> */}
      <Navbar />
      <div className="my-5">
        <Router>
          <Switch>
            <Route path="/CreateTodo">
              <CreateTodo />

            </Route>
            <Route path="/Personaldetails">
              <Personaldetails/>
            </Route>
            {/* <Route path="/">
              <App/>
            </Route> */}
          </Switch>
        </Router>
      </div>


    </>
  )
}




export default App;
