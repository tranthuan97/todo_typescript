import React from 'react';
// import PropTypes from 'prop-types';
import { DailySwitchButton, MonthlySwitchButton } from './styled';

const SwitchButton = () => {
  const [switchState, setSwitchState] = React.useState('monthly');

  return (
    <>
      <div style={{ position: 'relative', width: 290, left: '50%', transform: 'translate(-50%)', }}>
        <div style={{ display: 'flex', flexDirection: 'row', border: '2px solid #eef0f4', borderRadius: '35px' }}>
          <MonthlySwitchButton switchState={switchState} onClick={() => setSwitchState('monthly')}>
            Monthly
          </MonthlySwitchButton>
          <DailySwitchButton switchState={switchState} onClick={() => setSwitchState('daily')}>
            Daily1
          </DailySwitchButton>
        </div>
      </div >
    </>
  );
};

SwitchButton.propTypes = {

};

export default SwitchButton;