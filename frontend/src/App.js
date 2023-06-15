import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import carlogo from "./images/carlogo.jpg";
import './App.css';
import CustomCarForm from './components/CustomCarForm';


function App () {
  return (
<AppProvider>
  <div className="container">
    <nav class="navbar navbar-dark bg-dark">
      <ul>
            <img src={carlogo} width="30" height="30" class="d-inline-block align-top" alt=""></img>
            <a href="#" className="navbar-brand">Car Calculator</a>
      </ul>
    </nav>
    <main className="container alert alert-danger">
      <div className="row">
        <CustomCarForm />
      <div className="col-sm alert alert-success">
      <img src="vs-image.png" alt="VS"></img>
      </div>
      <div className="col-sm">
        <h2>Car B</h2>
        <div className="col">
            carimage component 
        </div>
        <div className="col">
              Dropdown
            </div>
      </div>
      </div>
    </main>
    <section className="alert alert-warning">
      <div className="col">
          Autonomia
      </div>
      <div className="col">
        Autonomia calculated component
      </div>
      <div className="col">
        selected car autonomy
      </div>
      <div className="col">
       Costo
      </div>
      <div className="col">
        Calculated cost
      </div>
      <div className="col">
        Selected cost
      </div>
    </section>
  </div>
</AppProvider>
  );
}

export default App;
