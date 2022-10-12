import './admin.css';
import order from '../../Assests/images/order.svg';
import calender from '../../Assests/images/calender.svg';
import cart from '../../Assests/images/cart.svg';
import userLogo from '../../Assests/images/userLogo.svg';
import slide from '../../Assests/images/slide.svg';
import logo from '../../Assests/images/logo.svg';

export default function Admin() {
  return (
    <header class="header">
      <div class="nav">
      <img class="slide" src={slide} alt="" width="40px" height="60px" />
      <img class="slide2" src={logo} alt="" width="100px" height="60px" />


        <img src={order} alt="" width="40px" height="60px" />
        <div class="nav-link dropdown-toggle" >
          Order Type:
          <p>Take Away</p>
        </div>

        <img src={calender} alt="" width="40px" height="60px" />
        <div class="nav-link dropdown-toggle" >
          Time:
          <p>ASAP</p>
        </div>

        <img src={cart} alt="" width="40px" height="60px" />
        <div class="nav-link " >
        </div>

        <img src={userLogo} alt="" width="40px" height="60px" />
        <div class="nav-link " >
        </div>

        {/* <img src={cart} alt="" width="40px" height="60px" /> */}

        {/* <img src={userLogo} alt="" width="40px" height="60px" /> */}
        {/* <li class="nav-item">
          <a class="nav-link" href="/">
            <img src={cart} alt="" width="40px" height="40px" />
          </a>
        </li><li class="nav-item">
          <a class="nav-link" href="/">
            <img src={userLogo} alt="" width="40px" height="40px" />
          </a>
        </li> */}
      </div>
    </header>
  )
}
