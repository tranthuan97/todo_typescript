import LoginButton from 'components/LoginButton';
import IntroduceCarousel from 'pages/Introduce/IntroduceCarousel';

type loginButton = {
  iconStyle: object
  contentStyle: object
  icon: JSX.Element
  content: string
}

const loginButtons: loginButton[] = [
  {
    iconStyle: { background: '#ae3737' },
    contentStyle: { background: '#8e4444' },
    icon: <i className="fa-solid fa-right-to-bracket"></i>,
    content: "ACCOUNT",
  },
  {
    iconStyle: { background: '#283b68' },
    contentStyle: { background: '#3b5798' },
    icon: <i className="fa-brands fa-facebook-f"></i>,
    content: "FACEBOOK",
  },
  {
    iconStyle: { background: '#50b2e0' },
    contentStyle: { background: '#59dcff' },
    icon: <i className="fa-brands fa-twitter"></i>,
    content: "TWITTER",
  }
]

const Introduce = () => {

  const renderLoginButton = (item: loginButton) => (
    <div key={item.content} className='my-1' style={{ display: 'flex', justifyContent: 'center', }}>
      <LoginButton
        iconStyle={item.iconStyle}
        contentStyle={item.contentStyle}
        icon={item.icon}
        content={item.content} />
    </div>
  )

  return (
    <div>
      <IntroduceCarousel />
      {loginButtons.map(renderLoginButton)}
    </div>
  );
};
export default Introduce;