import React, { useState } from 'react';
import projects from './projects.json';
import Project from './index';

function Projects() {
    const [projectList, setProjects] = useState(projects)

    return (
        <div className="row">
            {projectList.map((project) => <Project
                id={project.id}
                name={project.name}
                image={project.image}
                key={project.id}
                github={project.github}
                appLink={project.appLink}
            />
            )
            }
        </div>
    )
}

export default Projects;