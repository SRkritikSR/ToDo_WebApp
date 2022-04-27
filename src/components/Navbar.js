
// import { useState } from "react";

// import DisplayTodo from "./DisplayTodo";





export default function Navbar(props) {
    return (
    
    
        
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/DisplayTodo">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/CreateTodo">CreateTodo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Personaldetails">Signin</a>
                                {/* <Link to="/Personaldetails">Signin</Link> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="DisplayTodo">DisplayTodo</a>
                            </li>
                           
                        </ul>

                    </div>
                </div>
             </nav>
            // <div>
            //     <>
            //     <DisplayTodo />
            //     </>
            //     <h1 className="text-center">Hello UserName</h1>
            // </div> //


        

    )

}
