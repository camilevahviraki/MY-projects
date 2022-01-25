import React from 'react';
import {Link} from 'react-router-dom';

function SetNavBar() {
    return (
        <ul>
            <li><Link to="/form1" >Formulaire1</Link></li>
            <li><Link to="/login" >Login</Link></li>
            <li><Link to="/register">Registration</Link></li>
            <li><Link to="/record">Recording page</Link></li>
            <li><Link to="/scroll">InfiniteScroll</Link></li>
            <li><Link to="/media-query">Media query</Link></li>
            <li><Link to="/SendFiles">Send files </Link></li>
            <li><Link to="/scrollingBdd">Scroll into bdd </Link></li>
            <li><Link to="/scrollingBdd2">Scroll into bdd class </Link></li>
            <li><Link to="/imgCompressor">Image Compressor</Link></li>
            <li><Link to="/PushNotification">PushNotification</Link></li>
            <li><Link to="" >Home</Link></li>
        </ul>
    )
}

export default SetNavBar
