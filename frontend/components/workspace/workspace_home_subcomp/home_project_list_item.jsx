import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initialsSelector } from '../../../reducers/selector_util';
import { deleteProject } from '../../../actions/project_actions';

function HomeProjectListItem(props) {
    function handleRemoveProject() {
        props.deleteProject(props.project);
    }
    
    function toggleDropdown(e) {
        e.stopPropagation();
        const dropdown = document.getElementById(`mininav-dropdown-${props.project.id}`);
        dropdown.classList.toggle('hidden');
    }

    function handleProjectShowRouting(e) {
        props.history.push(`/workspace/project/${props.project.id}/board`);
    }

    function handleEditProject() {
        props.openModal('edit project', props.project);
    }

    const projColor = props.project.color;

    // var style = {
    //     margin: '20px',
    //     width: '250px',
    //     height: '250px',
    //     backgroundColor: `rgb(${rgb})`,
    //     display: 'inline-block',
    //   };

    return (
        <div onClick={handleProjectShowRouting}>
            
            <div className='hover-effect-container clickable'>
                <div className='project-item-square project-item-square--proj' style={{backgroundColor: `${projColor}`}}>
                    <div className='mininav-container'>
                        <img className='project-item-square__mininav' src={window.unfilledStarIconURL} />
                        
                        <div onClick={toggleDropdown} className='project-item-squre_mininav-btn menu-btn'>
                            <div className='project-item-square__mininav'>...</div>
                            <div id={`mininav-dropdown-${props.project.id}`} className='mininav-dropdown menu hidden'>
                                <div className='mininav-dropdown__item-wrap'>
                                    <div className='mininav-dropdown__item' onClick={handleEditProject}>Edit Project Detail</div>
                                </div>
                                <div className='mininav-dropdown__item-wrap'>
                                    <div className='mininav-dropdown__item' onClick={handleRemoveProject}>Remove Project</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='project-item-square__center'>
                        <div className='project-item-square__center__icon'><img src={window.kanbanIconURL} /></div>
                        <div className='project-item-square__center__profile-circle user-circle'>{props.projectOwnerInitial}</div>
                    </div>
                </div>

                <div className='project-item-label'>{props.project.name}</div>
            </div>
        </div>
    );
}


const mapStateToProps = (state, ownProps) => {
    const initial = (Object.values(state.entities.members).length === 0) ? '' : initialsSelector(state.entities.members[ownProps.project.owner_id].name);

    return ({
    project: ownProps.project,
    projectOwnerInitial: initial,
})};

const mapDispatchToProps = dispatch => ({
    deleteProject: id => dispatch(deleteProject(id)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeProjectListItem));
//might need withRouter and/or Link
//project item container goes to project show page on click
// mini nav items have on click behaviors
