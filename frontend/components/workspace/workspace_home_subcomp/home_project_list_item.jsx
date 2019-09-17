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
        const dropdown = document.getElementById('mininav-dropdown');
        dropdown.classList.toggle('hidden');
    }

    function handleProjectShowRouting(e) {
        props.history.push(`/project/${props.project.id}/board`);
    }

    const projColor = props.project.color;
    return (
        <div onClick={handleProjectShowRouting}>
            
            <div className='hover-effect-container clickable'>
                <div className='project-item-square project-item-square--proj'>
                    <div className='mininav-container'>
                        <img className='project-item-square__mininav' src={window.unfilledStarIconURL} />
                        
                        <div onClick={toggleDropdown} className='project-item-squre_mininav-btn'>
                            <div className='project-item-square__mininav'>...</div>
                            <div id='mininav-dropdown' className='mininav-dropdown hidden'>
                                <div className='mininav-dropdown__item' onClick={handleRemoveProject}>Remove Project</div>
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
