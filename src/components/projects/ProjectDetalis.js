import React from 'react'

const ProjectDetalis = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas a deserunt? Vero, nesciunt alias. </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div> Posted by Metwally </div>
                    <div> 2nd Septamber, 2am </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectDetalis
