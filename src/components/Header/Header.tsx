import Logo from '../../assets/logo.webp';

import './Header.css';

const Header = () => {
  return (
    <div id='header-container'>
      <div id='header-bar'></div>
      <img src={Logo} alt='' id='header-logo' />
    </div>
  );
};

export default Header;
