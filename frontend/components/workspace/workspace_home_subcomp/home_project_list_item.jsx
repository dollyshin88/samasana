import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { initialsSelector } from '../../../reducers/selector_util';

function HomeProjectListItem(props) {

    return (
        <div>
            {/* change this div into Link-to */}
            <div className='hover-effect-container'>
                <div className='project-item-square'>
                    <div className='project-item-square__mininav'>fav-btn</div>
                    <div className='project-item-square__mininav'>menu</div>
                    <div className='project-item-square__icon'>icon</div>
                    <div className='project-item-square__profile-circle'>{props.projectOwnerInitial}</div>
                </div>

                <div>{props.project.name}</div>
            </div>
        </div>
    );
}


const mapStateToProps = (state, ownProps) => ({
    project: ownProps.project,
    projectOwnerInitial: initialsSelector(state.entities.members[ownProps.projects.owner_id]),
});

const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(HomeProjectListItem);
//might need withRouter and/or Link
//project item container goes to project show page on click
// mini nav items have on click behaviors
