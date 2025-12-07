import logoImage from '../assets/images/logo.png';
import logoImageBlack from '../assets/images/logoblack.png';

const Logo = ({ isSticky }) => {
  return (
    <img
      src={isSticky ? logoImageBlack : logoImage}
      alt='logo'
      className='logo'
    />
  );
};
export default Logo;
