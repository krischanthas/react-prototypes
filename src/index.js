import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => {
    return Math.floor(Math.random() * 1001);
}

const greeting = (userObj) => {
    return (
        <div className="container">
            <h1>Hello {userObj.name}</h1>
            <h2 className="text-muted">Your lucky number is {userObj.luckyNumber}</h2>
        </div>
    )
}

const userObj = {
    name: 'Kris',
    luckyNumber: luckyNumber(),
}

ReactDOM.render(
    greeting(userObj),
    document.getElementById('root')
);
