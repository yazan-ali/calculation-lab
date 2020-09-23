import React, { Component } from 'react';
import './landingPage.css';

function LandingPage(){
        return(
            <div className="main">
                <div>
                    <h3> <i className="fas fa-calculator"></i> Calculation Lab</h3>
                </div>
                <div className="row Row">
                <div className="col-md-6 fitness">
                <h1>Fitness & Health</h1>
                <div className="menu">
                <ul>
                <li>
                    <a href="/calories">Calories Calculator</a>
                </li>
                <li>
                    <a href="/bmi">Bmi Calculator</a>
                </li>
                <li>
                    <a href="/ideal-weight">Ideal Weight</a>
                </li>
            </ul>
                </div>
                </div>
                <div className="col-md-6 financial">
                <h1>Financial Calculators</h1>
                <div className="menu">
                <ul>
                <li>
                    <a href="/payment">Payment Calculator</a>
                </li>
                <li>
                    <a href="/tax">Tax Calculator</a>
                </li>
            </ul>
                </div>
             </div>
                </div>
                <div className="row Row">
                <div className="col-md-12 math">
                <h1>Math Calculators</h1>
                <div className="menu">
                <ul>
                <li>
                    <a href="/percentage">Percentage Calculator</a>
                </li>
                <li>
                    <a href="/average">Average Calculator</a>
                </li>
                <li>
                    <a href="/random">Random Number Generator</a>
                </li>
                <li>
                    <a href="/gpa">GPA Calculator</a>
                </li>
            </ul>
            <p className="p d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Quam
               vulputate dignissim suspendisse in est ante. Lacinia quis vel eros donec ac odio tempor orci.</p>
                  <svg className="wave d-none d-md-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="gray" fill-opacity="0.8" d="M0,32L48,42.7C96,53,192,75,288,85.3C384,96,480,96,576,117.3C672,139,768,181,864,176C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
                </div>
                </div>
            </div>
        );
};

export default LandingPage;