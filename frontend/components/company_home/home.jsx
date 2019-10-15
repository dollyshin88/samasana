//contain <company header nav> and <company intro>
// header nav contain log in button and sign up button as well as asana logo

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomeHeaderNav from './home_header_nav';
import HomeMain from './home_main';
import { openModal } from '../../actions/modal_actions';

function Home(props) {

    return (
        <div id='company-home' className='home-style'>
            <HomeHeaderNav openModal={props.openModal} history={props.history} />
            <HomeMain history={props.history} />
        </div>
    );
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    openModal: (contentName, data) => dispatch(openModal(contentName, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

