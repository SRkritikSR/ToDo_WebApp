import React from 'react'
import './App.css';

import Navbar from './components/Navbar'
import DisplayTodo from './components/DisplayTodo';
import CreateTodo from './components/CreateTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Personaldetails from './components/Personaldetails';


function App(props) {
  // let EmptyAr={Todo: "good boy", time:"lalal", date:"bla"};
  // console.log(typeof(EmptyAr));
  {/* 
      <DisplayTodo />
      <CreateTodo/> 
      <Navbar />
      <CreateTodo/>
      <Personaldetails/>
      <DisplayTodo/> */}

  return (

  




    
    <Router>
      <Navbar/> 
      <Switch>
        <Router path="/CreateTodo">
          <CreateTodo/>

        </Router>
        <Router path="/PersonalDetails">
          <Personaldetails/>
        </Router>
        <Router path="/DisplayTodo">
          <DisplayTodo UserData={[{ text: "hello", time: 2, date:15 }]}/>
        </Router>
      </Switch>
      </Router>
    /* //   <div className="my-5">
    //     <Navbar/> 
    //     <Switch>
    //       <Route path="/CreateTodo">
    //         <CreateTodo />

    //       </Route> */
    
    //       <Route path="/Personaldetails">
    //         <Personaldetails />
    //       </Route>
    //       <Route path="/DisplayTodo">
    //         <DisplayTodo />

    //       </Route>
    //       <Route path="/">
    //         <App />
    //       </  Route>
    //     </Switch>
    //   </div>
    // </Router>





  );
}




export default App;
