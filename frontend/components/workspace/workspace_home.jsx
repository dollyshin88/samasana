import React from 'react';


function WorkspaceHome (props) {

    function renderProjects() {
        if (props.projects.length) {
            const list = props.projects.map((project, i) => (
                    <div key={i}>{project.name}</div>
                ))
            return list;
        }
    }

    return (
        <div className='workspace-home-container'>
    
            <p>Task due soon section</p>
            <div>

            </div>
            <p>Recent projects section</p>
            <div>
                {renderProjects()}
            </div>

        </div>
    );
}

export default WorkspaceHome;