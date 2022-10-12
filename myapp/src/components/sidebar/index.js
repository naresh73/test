import './sidebar.css';
import pLogo from '../../Assests/images/profileLogo.png'
import balance from '../../Assests/images/balance.png'
import addressbook from '../../Assests/images/addressbook.png'
import favorite from '../../Assests/images/favorite.png'
import notification from '../../Assests/images/notification.png'
import about from '../../Assests/images/about.png'
import { useState } from 'react';
import UserProfile from './profile';

export default function Sidebar() {
    const [profile, setProfile] = useState(false)

    function showProfile() {
        setProfile(true)
    }
    return (
        <div className='adminpage'>
        <div class="sidebar-content">
            <ul class="lists">
                <li class="list">
                    <a href="#" onClick={showProfile} class="nav-link">
                        <img src={pLogo} width="30px" height="30px" alt="" />
                        <span class="link">Profile</span>
                    </a>
                </li>
                <li class="list">
                    <a href="/admin" class="nav-link">
                    <img src={balance} width="30px" height="30px" alt="" />
                        <span class="link">Payment</span>
                    </a>
                </li>
                <li class="list">
                    <a href="/admin" class="nav-link">
                    <img src={addressbook} width="30px" height="30px" alt="" />
                        <span class="link">Address Book</span>
                    </a>
                </li>
                <li class="list">
                    <a href="/admin" class="nav-link">
                    <img src={favorite} width="30px" height="30px" alt="" />
                        <span class="link">Favorite</span>
                    </a>
                </li>
                <li class="list">
                    <a href="/admin" class="nav-link">
                    <img src={notification} width="30px" height="30px" alt="" />
                        <span class="link">Notification Settings</span>
                    </a>
                </li>
                <li class="list">
                    <a href="/admin" class="nav-link">
                    <img src={about} width="30px" height="30px" alt="" />
                        <span class="link">About</span>
                    </a>
                </li>
            </ul>

           
        

        </div   >
         { profile ? 
            
            <UserProfile />
            
            :
            <div></div>
         }
        </div>
        
        
    )
}
