import React from 'react';

const Notification= (props) => {
    return(
        <div className="Notification-Item">
            <p>{props.message}</p>
            <div className='Bar'>
                
            </div>
        </div>
    )
};
export default Notification;