import MainTempDisplay from '../MainTempDisplay/MainTempDisplay';
import SecondaryTempDisplay from '../SecondaryTempDisplay/SecondaryTempDisplay';

import './ContentContainer.css';

const ContentContainer = () => {
  return (
    <div id='content-container'>
      <div className='content-container-item'>
        <MainTempDisplay />
      </div>
      <div className='content-container-item'>
        <SecondaryTempDisplay />
      </div>
    </div>
  );
};

export default ContentContainer;
