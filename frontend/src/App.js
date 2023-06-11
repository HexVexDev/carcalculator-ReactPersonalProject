import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import carlogo from "./images/carlogo.jpg";
import './App.css';

function App () {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <ul>
            <img src={carlogo} width="30" height="30" class="d-inline-block align-top" alt=""></img>
            <a href="#" className="navbar-brand">Car Calculator</a>
      </ul>
    </nav>
  );
}

export default App;
