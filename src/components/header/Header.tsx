import './header.scss';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
