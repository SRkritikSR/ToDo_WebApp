//app.js, index.js makes the styles apply to all of the component head.
import react, { useState } from "react";
import DisplayTodo from "./DisplayTodo";
import Navbar from './Navbar';
import App from '../App';



export default function CreateTodo(props) {

    const [TodoAR, UpdateTodoAR] = useState([]);
    const [Todo, NewTodo] = useState([]);
    const [Time, NewTime] = useState([]);
    const [Date, NewDate] = useState([]);
    const UpdateText = (event) => {
        NewTodo(event.target.value);
    }
    //TodoAr is a array which  I am trying to update using 
    const UpdateTime = (event) => {
        NewTime(event.target.value);
        //instead just update it to Todoar{ ttime:}
    }
    const UpdateDate = (event) => {
        NewDate(event.target.value);
    }

    const UploadText = () => {
        // checkes if the inpyt is blank or not
        //then updates the values of todo and time to the array that is to be
        //given to display todo through props

        if (!Todo || !Time || !Date) {
            alert("please enter and submit again Blank not allowed");
        }

        else {

            //the threee dots basically takes the previous array and adds, the new in it
            if (window.confirm("Are You sure?\nOnce entered the Todo, it cannot be changed")) {
                UpdateTodoAR([...TodoAR, { text: Todo, time: Time, date:Date }]);

                NewTodo("");
                NewTime("");
                NewDate("");
            }

        }
        console.log(TodoAR, typeof (TodoAR));

    }
    //function that is used to delte an element in the todo

    const DelTodoAR = (delval) => {
        const tempTodoAR = TodoAR.filter((elem) => TodoAR.indexOf(elem) !== delval);// the filter component returns the array which satisfyies the conditions.
        console.log(TodoAR);
        UpdateTodoAR(tempTodoAR);

    }




    return (

        <div className="bg-info text-white mx-5">
            <div className="form-group mx-5 ">
                <label for="exampleFormControlTextarea1 my-3">Your Todo Please!</label>
                <input className="form-control  my-2" id="exampleFormControlTextarea1" rows="3" placeholder="Your todo" value={Todo} onChange={UpdateText} />
            </div>
            <div className="row my-5 mx-5">
                <div className="col">
                    <label>Expected Completion Date</label>
                    <input type="date" className="form-control my-2" placeholder="Expected completion date" value={Date} onChange={UpdateDate} />
                </div>
                <div className="col">
                    <label>Expected completion Time</label>
                    <input type="time" className="form-control my-2" placeholder="Expected completion time" value={Time} onChange={UpdateTime} />
                </div>
            </div>
            <button type="submit" className="btn btn-primary my-3 mx-5" onClick={UploadText}>Submit</button>
            <>
                <DisplayTodo UserData={TodoAR} DeleteThis={DelTodoAR} />
            </>









        </div>
    )
}

