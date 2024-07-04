import React from "react";
import NavBar from "./navBar";
import errorpage from './assets/error.png'
const ErrorMsg = () => {
    return (
        <>
           <NavBar/>
            <div>
                <img src={errorpage} alt="" />
                <h1 className="display-6">404 Not Found</h1>
                <h4>Try again</h4>
            </div>
        </>
    )
}
export default ErrorMsg