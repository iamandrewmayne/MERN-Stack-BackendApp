import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  let [err, setErr] = useState({ status: false, errMsg: "" });

  //form submission
  const onFormSubmit = (userObj) => {
    //console.log(userObj);
    //send userObj to API by making HTTP POST
    axios
      .post("http://localhost:4000/user/create-user", userObj)
      .then((response) => {
        let message = response.data.message;
        if (message == "Success") {
          //navigate to Sign In component programatically
          navigate("/signin");
          //alert("User Created Successfully!");
        } else {
          setErr({ ...err, status: true, errMsg: message });
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="container">
      <p className="display-2 text-center">Sign Up Here!</p>
      {/* this will render if username is already taken  */}
      {err.status == true && (
        <p className="text-danger h3 text-center">{err.errMsg}</p>
      )}
      {/* User registration form */}
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 mx-auto">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* Username */}
            <div className="mb-3">
              <label for="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                {...register("username", { required: true })}
              />
              {/* validation error message for username */}
              {errors.username?.type == "required" && (
                <p className="text-danger">*Username is Required!</p>
              )}
            </div>
            {/* Password */}
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...register("password", { required: true })}
              />
              {/* validation error message for password */}
              {errors.password?.type == "required" && (
                <p className="text-danger">*Password is Required!</p>
              )}
            </div>
            {/* Email */}
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email", { required: true })}
              />
              {/* validation error message for email */}
              {errors.email?.type == "required" && (
                <p className="text-danger">*Email is Required!</p>
              )}
            </div>
            {/* DOB */}
            <div className="mb-3">
              <label for="dob" className="form-label">
                Date Of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                {...register("dob", { required: true })}
              />
              {/* validation error message for dob */}
              {errors.dob?.type == "required" && (
                <p className="text-danger">*Date Of Birth is Required!</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Register!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
