import React from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./navBar";

const Profile = () => {
  const profiles = ["abel", "orogo", "james", "owino", "john"];
  const { profileId } = useParams();

  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-md-5">
        {profiles.map((profile2, index) => (
          <h1 key={index}>
            <Link to={"/profile/" + profile2}>{profile2}</Link>
          </h1>
        ))}
        </div>
       
      </div>
      <div>
        <h1 className="col-md-6">Profile Page {profileId}</h1>
      </div>
    </>
  );
};

export default Profile;
