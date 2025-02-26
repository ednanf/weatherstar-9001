import { memo } from 'react';

import Logo from '../../assets/logo.webp';

import './Header.css';

/**
 * Header component that displays the logo and header bar.
 * Uses React.memo for performance optimization.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header: React.FC = (): JSX.Element => {
  return (
    <div id='header-container'>
      <div id='header-bar'></div>
      <img src={Logo} alt='Logo' id='header-logo' />
    </div>
  );
};

export default memo(Header);
