import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { initialsSelector } from '../../../reducers/selector_util';

function HomeProjectListItem(props) {
    const projColor = props.project.color;
    return (
        <div>
            {/* change this div into Link-to */}
            <div className='hover-effect-container'>
                <div className='project-item-square'>
                    <div className='mininav-container'>
                        <div className='project-item-square__mininav'>fav-btn</div>
                        <div className='project-item-square__mininav'>menu</div>
                    </div>
                    
                    <div className='project-item-square__center'>
                        <div className='project-item-square__center__icon'><img src={window.kanbanIconURL} /></div>
                        <div className='project-item-square__center__profile-circle'>{props.projectOwnerInitial}</div>
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

});
export default connect(mapStateToProps, mapDispatchToProps)(HomeProjectListItem);
//might need withRouter and/or Link
//project item container goes to project show page on click
// mini nav items have on click behaviors
