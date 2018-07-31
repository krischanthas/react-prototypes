import React from 'react';
import Table from './table';


const students = [
    {
        student: 'Kris',
        course: 'Science',
        grade: 90
    },
    {
        student: 'Ryan',
        course: 'Math',
        grade: 100
    },
    {
        student: 'Howard',
        course: 'English',
        grade: 90
    }
];

function App() {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

export default App;

