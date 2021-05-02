import React from 'react';
import myResume from '../../assets/resume/Isabelle_Bertram_Resume.pdf'

function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <a href={myResume} download>Download Resume</a>
            <ul>
                <h3 className="py-2">Front End</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <h3 className="py-2">Back End</h3>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>
        </div>
    )
}

export default Resume;