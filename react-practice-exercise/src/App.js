import Signup from "./components/sign-up/sign-up.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/home.component";
import Feature from "./components/Features/feature.component";
import Login from "./components/Login/login.component";
import Navigation from "./components/Navbar/navigation.component";

function App() {
  return (
    <div className="App">
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="sign-up" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="feature" element={<Feature/>} />
      </Routes>
    </div>
  );
}

export default App;
