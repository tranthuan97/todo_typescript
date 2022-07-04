import LoginButton from 'components/LoginButton';
import React from 'react';
import IntroduceCarousel from './components/IntroduceCarousel';

const Login = () => {
  return (
    <div>
      <IntroduceCarousel />
       <div style={{ display: 'flex', justifyContent: 'center', }}>
        <LoginButton
          iconStyle={{ background: '#283b68' }}
          contentStyle={{ background: '#3b5798' }}
          icon={<i className="fa-brands fa-facebook-f" />}
          content="FACEBOOK" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', }}>
        <LoginButton
          iconStyle={{ background: '#50b2e0' }}
          contentStyle={{ background: '#59dcff' }}
          icon={<i className="fa-brands fa-twitter" />}
          content="TWITTER" />
      </div>
    </div>
  );
};

export default Login;