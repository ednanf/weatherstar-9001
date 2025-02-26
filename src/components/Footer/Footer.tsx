import { memo } from 'react';
import './Footer.css';

/**
 * Footer component that displays the footer border and footer content.
 * Uses React.memo for performance optimization.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <div id='footer-border'></div>
      <div id='footer'></div>
    </>
  );
};

export default memo(Footer);
