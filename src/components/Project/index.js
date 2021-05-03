import React from 'react';
import mealPlan from '../../assets/images/1.jpeg';
import cocktail from '../../assets/images/2.jpg';
import password from '../../assets/images/3.jpeg';
import blog from '../../assets/images/4.jpg';
import weather from '../../assets/images/5.jpg';
import planner from '../../assets/images/6.jpg';

const images = [mealPlan, cocktail, password, blog, weather, planner];
function Project(props) {
    const imageSpot = props.id;
    return (
        <div className="col-4">
            <p className="project-title">{props.name}</p>
            <a href={props.appLink}>
                <img className="rounded float-start project-image" src={images[imageSpot]} alt={props.name} />

            </a>
            <a className="github" href={props.github}><i className="fab fa-github"></i></a>
        </div>
    )
}

export default Project;