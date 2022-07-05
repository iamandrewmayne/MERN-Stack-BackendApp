import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { promiseLifeCycle } from "../slices/userLoginSlice";
import { useNavigate } from "react-router-dom";

function Signin() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { user, isSuccess, isError, errMsg, isPending } = useSelector(
    (state) => state.user
  );

  //form submission
  const onFormSubmit = (userCredObj) => {
    dispatch(promiseLifeCycle(userCredObj));
  };

  useEffect(() => {
    if (isSuccess == true) {
      navigate(`/userdashboard/${user.username}`);
    }
  }, [isSuccess, isError]);

  return (
    <div className="container">
      <p className="display-2 text-center">Login Here!</p>
      {/* User registration form */}
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 mx-auto">
          {/* invalid user credentials */}
          {isError && <h2 className="text-danger text-center">{errMsg}</h2>}
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
                {...register("username")}
              />
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
                {...register("password")}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
