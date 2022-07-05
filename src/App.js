import React from "react";
import "./App.css";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Routes, Route } from "react-router-dom";
import Userdashboard from "./components/Userdashboard";
import { resetState } from "./slices/userLoginSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  let { isSuccess } = useSelector((state) => state.user);
  let dispath = useDispatch();

  const logout = () => {
    //remove token from localstorage
    localStorage.clear();
    dispath(resetState());
  };

  return (
    <>
      {/* Navbar */}
      <Navbar className="bg-dark navbar-dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">Backend App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {isSuccess ? (
                <NavLink className="nav-link" to="/signin" onClick={logout}>
                  Signout
                </NavLink>
              ) : (
                <>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink>
                  <NavLink className="nav-link" to="/signin">
                    Signin
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/signup" element={<Signup />}>
          Register
        </Route>
        <Route path="/signin" element={<Signin />}>
          Login
        </Route>
        <Route path="/userdashboard/:username" element={<Userdashboard />}>
          UserDashboard
        </Route>
      </Routes>
    </>
  );
}

export default App;
