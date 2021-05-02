import React from 'react';
import myResume from '../../assets/resume/Isabelle_Bertram_Resume.pdf'

function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <a href={myResume} download>Download Resume</a>
            <h3>Core Competencies</h3>
            <ul>
                <h4>Front End</h4>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <h4>Back End</h4>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>
        </div>
    )
}

export default Resume;