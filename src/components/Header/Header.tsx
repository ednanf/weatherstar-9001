import Logo from '../../assets/logo.webp';

import './Header.css';

const Header = () => {
  return (
    <div id='header-container'>
      <div className='header-contents'>
        <div id='header-bar'></div>
        <img src={Logo} alt='' id='header-logo' />
      </div>
    </div>
  );
};

export default Header;
