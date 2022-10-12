import './profilepage.css';
import mobile from '../../Assests/images/mobile.png';
import pLogo from '../../Assests/images/profileLogo.png'
import emailicon from '../../Assests/images/emailicon.png'
import verifiedicon from '../../Assests/images/verifiedicon.png'
import editicon from '../../Assests/images/editicon.png'

export default function UserProfile() {
    return (
        <div class="profilepage">
            <div className='section'>
                Mobile Number
                <div className='content'>
                    <div className='logo'><img src={mobile} width="30px" height="30px" alt="" /></div>
                    <div className='userdata'>9784984318</div>
                    <div className='icon'><a href='/admin'>
                        <img className='icons' src={verifiedicon} width="30px" height="30px" alt="" />
                    </a>
                    </div>
                </div>
            </div><div className='section'>
                Name
                <div className='content'>
                    <div className='logo'><img src={pLogo} width="30px" height="30px" alt="" /></div>
                    <div className='userdata'>naresh73</div>
                    <div className='icon'><a href='/admin'>
                        <img className='icons' src={editicon} width="20px" height="20px" alt="" />
                    </a>
                    </div>
                </div>
            </div><div className='section'>
                Email
                <div className='content'>

                    <div className='logo'><img src={emailicon} width="20px" height="20px" alt="" /></div>
                    <div className='userdata'>nareshsharma0318@gmail.com</div>
                    <div className='icon'><a href='/admin'>
                        <img className='icons' src={editicon} width="20px" height="20px" alt="" />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
