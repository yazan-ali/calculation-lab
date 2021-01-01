import React, { useState } from 'react';
import './main.css';
import Navbar from './navbar';

function NewYear() {

    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [mins, setMins] = useState("");
    const [seconds, setSeconds] = useState("");

    const newYear = `1 Jan ${new Date().getFullYear() + 1}`

    function countdown() {
        const newYearDate = new Date(newYear);
        const currentDate = new Date();

        const totalSeconds = (newYearDate - currentDate) / 1000;

        setDays(Math.floor(totalSeconds / 3600 / 24));
        setHours(format(Math.floor(totalSeconds / 3600) % 24));
        setMins(format(Math.floor(totalSeconds / 60) % 60));
        setSeconds(format(Math.floor(totalSeconds) % 60));
    }

    function format(time) {
        return time < 10 ? `0${time}` : time
    }

    setInterval(countdown, 1000);

    return (
        <>
            <Navbar />
            { (days && hours && mins && seconds) === "" ?
                <div className="loader">
                    <i className="fas fa-8x fa-circle-notch fa-spin"></i>
                </div>
                : (
                    <div className="new-year-container">
                        <div className="countdown">
                            <h1>New Year Countdown</h1>
                            <div className="counters">
                                <div className="days">
                                    <p> {days} </p>
                                    <span>Days</span>
                                </div>
                                <div className="hours">
                                    <p> {hours} </p>
                                    <span>Hours</span>
                                </div>
                                <div className="mins">
                                    <p> {mins} </p>
                                    <span>Minutes</span>
                                </div>
                                <div className="seconds">
                                    <p> {seconds} </p>
                                    <span>Seconds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
}

export default NewYear;