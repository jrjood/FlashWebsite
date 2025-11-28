import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useTranslation } from 'react-i18next';

const NavLinks = ({ toggle }) => {
  const { t } = useTranslation('common'); // assuming keys live in common.json

  return (
    <ul className='nav-links'>
      {links.map((link) => (
        <li key={link.key}>
          <NavLink onClick={toggle} className='nav-link' to={link.path} end>
            {t(link.key)}
            <span></span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
