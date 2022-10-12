import './dashboard.css';
import logout from '../../Assests/images/logout.svg';

export default function Dashboard() {
  return (
    <div class="dashboard">
        <a href='/admin' className = "settings">
            Settings
        </a>
        <a href='/admin' className = "profile">
            Profile
        </a>
        <a href='/' className = "logout">
            <img src={logout} alt="logout" width="40px" />
        </a>
    </div>
  )
}
