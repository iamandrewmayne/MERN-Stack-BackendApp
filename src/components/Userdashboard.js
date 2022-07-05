import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Userdashboard() {
  let { user } = useSelector((state) => state.user);

  const getPrivateData = async () => {
    //get token from local storage
    let token = localStorage.getItem("token");
    //add token to header of request obj
    let response = await axios.get("/user/private-route", {
      headers: { Authorization: token },
    });
    let data = response.data;
    console.log("Data is - ", data);
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <h1>
          <strong>
            UserDashboard!
            <br />
            Welcome {user.username}
          </strong>
        </h1>
        <button
          className="btn btn-secondary mt-5 d-block mx-auto"
          onClick={getPrivateData}
        >
          Get Private Information
        </button>
      </div>
    </div>
  );
}

export default Userdashboard;
