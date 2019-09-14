import React from 'react';

function NavMainList(props) {


    return (
        <div className='nav-main-list'>
            <div className='nav-main-list__item'>
               
                <img src={window.home} />
                
                <div className='nav-main-list__item__text'>Home</div>
            </div>
            <div className='nav-main-list__item'>
                <div className='nav-main-list__item__icon'>
                    <img src={window.check} />
                </div>
                <div className='nav-main-list__item__text'>My Tasks</div>
            </div>
        </div>
    );
}

export default NavMainList;