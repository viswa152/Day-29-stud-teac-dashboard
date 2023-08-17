import React from 'react';
import './Dashboard.css'

function Progresschart() {
  return (
    <div className="progressbarWrapper">
    <div className="progressbarHeader">Student Task Completion</div>
    <div className="progressBarBlock">
      <label className="label" htmlFor="project1">
        Student 1 <span>20%</span>
      </label>
      <progress className="progress" value="20" max="100" id="project1">
        20%
      </progress>
      <label className="label" htmlFor="project2">
        Student 2 <span>40%</span>
      </label>
      <progress className="progress" value="40" max="100" id="project2">
        40%
      </progress>
      <label className="label" htmlFor="project3">
        Student 3 <span>60%</span>
      </label>
      <progress className="progress" value="60" max="100" id="project3">
        60%
      </progress>
      <label className="label" htmlFor="project4">
        Student 4 <span>80%</span>
      </label>
      <progress className="progress" value="80" max="100" id="project4">
        80%
      </progress>
      <label className="label" htmlFor="project5">
        Student 5 <span>Complete!</span>
      </label>
      <progress className="progress" value="100" max="100" id="project5">
        100%
      </progress>
    </div>
  </div>
  )
}

export default Progresschart