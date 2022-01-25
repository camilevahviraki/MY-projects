import React from 'react';
import {v4} from 'uuid';
import Notification from './Notification';

const NotificationProvider =(props) => {
    const notifications = [
        {
            id: v4(),
            type: "SUCCESS",
            messsage: "Hello world"

        }
    ];
    return(
        <div>
            <div className='Notification-wrapper'>
                 {notifications.map(note=> {
                      return <Notification key={note.id} {...note}/>
                  } ) }
            </div>
            {props.children} 
          <p> Camilux in the mood </p> 
        </div>
    )
};

export default NotificationProvider;