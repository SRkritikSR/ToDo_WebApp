    // import { useState } from "react";
    import CreateTodo from './CreateTodo';
    import Navbar from './Navbar';
    import React, { createFactory } from "react";
    // import {
    //     BrowserRouter as Router,
    //     Switch,
    //     Route,
    //     Link
    // } from "react-router-dom";







    export default function DisplayTodo({ UserData, DeleteThis }) {
        let abc=0
        // const RewardThis=()=> {
        //     window.alert("100 points for you wohooo!!!")
        //     console.log("hello")
        //     return abc=abc+100;

        //     -

        // }





        return (
            




            <div className="my-5" style={{color: 'red'}}>
                {console.log(UserData)}
            


                {
                    
                    UserData.map((elem) => {
                        return (
                            <div className="input-group" key={UserData.indexOf(elem)} >

                                <span className="input-group-text" id="basic-addon1">{UserData.indexOf(elem) + 1}</span>
                                <div className="input-group-text">
                                    <input className="form-check-input mt-0" type="checkbox" value="" onClick={() => {
                                        if (window.confirm("Todo is done are you sure?")) {
                                            console.log(UserData.indexOf(elem))
                                            DeleteThis(UserData.indexOf(elem))
                                            
                                            
                                            
                                            
                                        }
                                    }} aria-label="Checkbox for following text input" />
                                </div>
                               
                                <span type="text" aria-label="First name" className="form-control">{elem.text}</span>
                                <span type="text" aria-label="Last name" className="form-control">{elem.time}</span>
                                <span type="text" aria-label="Last name" className="form-control">{elem.date}</span>
                            </div>
                            




                        )


                    })

                }




            </div>


        )

    }
