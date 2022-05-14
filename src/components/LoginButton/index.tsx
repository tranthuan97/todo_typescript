import { Button } from 'antd';
import { LoginButtonType } from 'utils/TypeConfig/loginButtonType';
import './styles.css'

const LoginButton = ({
  icon,
  style,
  content,
  iconStyle,
  className,
  contentStyle,
  iconClassName,
  contentClassName,
}: LoginButtonType) => {
  return (
    <Button style={style} className={`lb-container ${className}`}>
      <div className={`lb-icon ${iconClassName}`} style={iconStyle}>{icon}</div>
      <div className={`lb-content ${contentClassName}`} style={contentStyle}>{content}</div>
    </Button>
  );
};

export default LoginButton;