import React from 'react';
import './calories.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="/calories"><i class="fas fa-calculator"></i> Calculation Lab</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Fitness & Health   </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/bmi">BMI Calculator</Link>
          <Link class="dropdown-item" to="/calories">Calorie Calculator</Link>
          <Link class="dropdown-item" to="/ideal-weight">Ideal Weight Calculator</Link>
        </div>
      </li>
        

    
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Financial Calculators  </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item"to="/payment">Payment Calculator</Link>
          <Link class="dropdown-item"to="/tax">Sales Tax Calculato</Link>
        </div>
      </li>


         <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Math Calculators  </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/percentage">Percentage Calculator</Link>
          <Link class="dropdown-item" to="/average">Average Calculator</Link>
          <Link class="dropdown-item" to="/random">Random Number Generator</Link>
          <Link class="dropdown-item" to="/gpa">GPA Calculator</Link>
        </div>
      </li>

    </ul>
  </div>
</nav>
    );
}

export default Navbar;