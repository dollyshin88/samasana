import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomeTaskRow(props) {
    function renderProjectPillLink() {
        return (Object.values(props.projects).length && props.projects[props.task.project_id]) ? (
            <Link to={`/workspace/project/${props.task.project_id}/board`} className='pill-link truncate'>{props.projects[props.task.project_id].name}</Link>
        ) : (<></>)
    }

    useEffect(() => {
        setTaskStatus(props.task.completed);
    }, [props.task]);
   
    //on click of the circle, change taskStatus state; toggle class on the icon; give icon id with task id embbeded
    //render icon based on the task status
    
    const [taskStatus, setTaskStatus] = useState(props.task.completed);
    function renderCheckbox(){
        const cssStyle = (taskStatus) ? 'checkbox-circle checkbox-green' : 'checkbox-circle';
        return (
            <div onClick={handleCheckboxClick} id={`checkbox-circle-${props.task.id}`} className={cssStyle}>
                <i className="fas fa-check fa-xs"></i>
            </div>
            )
    }

    function handleCheckboxClick(e) {
        
        e.stopPropagation();
        const checkbox = document.getElementById(`checkbox-circle-${props.task.id}`);
        checkbox.classList.toggle('checkbox-green');
        const newStat = (taskStatus === true) ? false : true;

        setTaskStatus(newStat); 

        props.updateTask({ id: props.task.id, completed: newStat })
       
    }

    function handleTaskModal() {
        props.openModal('edit task', props.task);
    }
    // the whole div should dispatch modalOpen with taskshow
    const projectName = (props.task.project_id) ? ('') : ('');
    
    return (
        <div className='task-row divider'>
            <div onClick={handleTaskModal} className='task-row__main clickable'>
                {renderCheckbox()}
                <div className='task-row__main__text'>{props.task.name}</div>
            </div>
            <div className='task-row__aside'>
                <div className='pill-link-container'>
                    {renderProjectPillLink()}
                </div>
                {/* link to project show page */}

                <div className='task-due-text'>{props.task.due_on}</div>
            </div>
        </div>
    );
}

export default HomeTaskRow;