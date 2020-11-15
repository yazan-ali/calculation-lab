import React from 'react';
import './landingPage.css';

function LandingPage() {
    return (
        <div className="main">
            <div>
                <h3 className="row"> <i className="fas fa-calculator"></i> Calculation Lab</h3>
            </div>
            <div className="row">
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
            <div className="row">
                <div className="col-md-6 math">
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
                                <a href="/gpa">GPA Calculator</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 other">
                    <h1>Other Calculators</h1>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="/random">Random Number Generator</a>
                            </li>
                            <li>
                                <a href="/newYear">New Year Countdown</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;