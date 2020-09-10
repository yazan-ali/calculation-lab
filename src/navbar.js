import React from 'react';
import './calories.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav id="mainNav" className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/calories"><i className="fas fa-calculator"></i> Calculation Lab</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Fitness & Health   </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/bmi">BMI Calculator</Link>
          <Link className="dropdown-item" to="/calories">Calorie Calculator</Link>
          <Link className="dropdown-item" to="/ideal-weight">Ideal Weight Calculator</Link>
        </div>
      </li>
        

    
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Financial Calculators  </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item"to="/payment">Payment Calculator</Link>
          <Link className="dropdown-item"to="/tax">Sales Tax Calculato</Link>
        </div>
      </li>


         <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Math Calculators  </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/percentage">Percentage Calculator</Link>
          <Link className="dropdown-item" to="/average">Average Calculator</Link>
          <Link className="dropdown-item" to="/random">Random Number Generator</Link>
          <Link className="dropdown-item" to="/gpa">GPA Calculator</Link>
        </div>
      </li>

    </ul>
  </div>
</nav>
    );
}

export default Navbar;