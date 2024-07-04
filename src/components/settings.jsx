import React from "react";
import NavBar from "./navBar";
import { useParams } from "react-router-dom";

const Settings = () =>{
    const params=useParams()
    return(
        <>
         <NavBar/>

            <h1 className="display-6">Settings Page {params.settingsId}</h1>
        </>
    )
}

export default Settings;