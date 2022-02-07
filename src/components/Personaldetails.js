import react, { useState } from 'react';
import App from '../App';
import Navbar from './Navbar';
import CreateTodo from './CreateTodo';
export default function Personaldetails(props) {
    const [Name, UpdateUserName] = useState("")

    const MainStyle = {
        backgroundColor: 'pink',
        width: "40vw",
        height: "20vw"
        
    }
    const UpdateUserData = (event) => {
        UpdateUserName(event.target.value)
    }

    return (


        <div className="container" style={MainStyle}>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Your Very Good Name</label>
                    <input type="email" value={Name} onChange={UpdateUserData} className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Username Please!</label>
                    <input type="text" className="form-control my-2" id="exampleInputPassword1" placeholder="Username    " />
                </div>

                <button type="button" className="btn btn-light my-5" onClick={() => {
                    console.log(Name, typeof (Name))
                    UpdateUserName("");
                }}>Submit
                </button>

            </form>


        </div>
    )
}

