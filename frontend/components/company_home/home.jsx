//contain <company header nav> and <company intro>
// header nav contain log in button and sign up button as well as asana logo

import React from 'react';
import { connect } from 'react-redux';
import HomeHeaderNav from './home_header_nav';
import HomeMain from './home_main';
import { openModal } from '../../actions/modal_actions';

function Home(props) {

    return (
        <div id='company-home'>
            <HomeHeaderNav openModal={props.openModal} />
            <HomeMain />
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     modal: state.ui.modal,
// });

const mapDispatchToProps = dispatch => ({
    openModal: (contentType) => dispatch(openModal(contentType)),
});

export default connect(null, mapDispatchToProps)(Home);


