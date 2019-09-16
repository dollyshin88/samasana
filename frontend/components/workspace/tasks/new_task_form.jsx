import React from 'react';
import { connect } from 'react-redux';

function NewTaskForm (props) {

    return (
        <div className='tempcard'>new task form test</div>
    );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);