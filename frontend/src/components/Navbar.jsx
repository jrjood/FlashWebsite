import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';
import { Logo, NavLinks } from '.';
import Wrapper from '../assets/wrappers/Navbar';
import MenuButtonWrapper from '../assets/wrappers/MenuButtonWrapper';
import AsideMenu from '../assets/wrappers/AsideMenu';
import LanguageSelect from './LanguageSelect';

const HIDE_AFTER_PX = 80; // how many px AFTER sticky activation before hiding on scroll-down

const NavBar = () => {
  const { t } = useTranslation('common');
  const [lang, setLang] = useState('en');
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [stickyAtY, setStickyAtY] = useState(null); // records Y when sticky turned on
  const location = useLocation();

  function toggleSideBar() {
    setIsOpen((prev) => !prev);
  }

  // lock body scroll when aside menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  }, [isOpen]);

  // IntersectionObserver to toggle sticky when leaving hero threshold
  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky((prev) => {
          const nextIsSticky = !entry.isIntersecting;

          // entering sticky -> record Y and ensure visible
          if (!prev && nextIsSticky) {
            setStickyAtY(window.scrollY);
            setShowNavbar(true);
          }

          // exiting sticky -> clear and ensure visible
          if (prev && !nextIsSticky) {
            setStickyAtY(null);
            setShowNavbar(true);
          }

          return nextIsSticky;
        });
      },
      {
        root: null,
        threshold: 0.8, // keep your current sensitivity (lower = earlier sticky)
        rootMargin: '0px',
      }
    );

    observer.observe(heroSection);
    return () => observer.unobserve(heroSection);
  }, [location.pathname]);

  // Scroll behavior: only hide after we've scrolled HIDE_AFTER_PX beyond sticky activation
  useEffect(() => {
    if (!isSticky) {
      setShowNavbar(true);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        const armY = (stickyAtY ?? 0) + HIDE_AFTER_PX;

        if (currentScrollY > lastScrollY && currentScrollY > armY) {
          // scrolling down past the grace distance -> hide
          setShowNavbar(false);
        } else {
          // scrolling up OR not yet past grace -> show
          setShowNavbar(true);
        }

        setLastScrollY(currentScrollY);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSticky, stickyAtY, lastScrollY]);

  return (
    <Wrapper $isSticky={isSticky} $showNavbar={showNavbar}>
      <AsideMenu $open={isOpen}>
        <div className='test '>
          <Link onClick={toggleSideBar} to='/blog' className='news'>
            {t('nav.news')}
          </Link>
          <div className='line'></div>
          <LanguageSelect
            $isSticky={isSticky}
            value={lang}
            onChange={setLang}
          />
        </div>
        <div className='content'>
          <NavLinks toggle={toggleSideBar} />
        </div>
      </AsideMenu>

      <MenuButtonWrapper
        type='button'
        className='toggle-btn'
        onClick={toggleSideBar}
        $open={isOpen}
      >
        {isOpen ? <AiOutlineClose /> : <IoIosMenu />}
      </MenuButtonWrapper>

      <nav className='navbar '>
        <Link to='.' className='logo-container logo1'>
          <Logo isSticky={isSticky} />
        </Link>

        <Link to='.' className='logo-container logo2'>
          <Logo isSticky={isSticky} />
        </Link>
        <div className='big-bar'>
          <div className='test'>
            <Link to='/blog' className='nav-link news'>
              {t('nav.news')}
            </Link>
            <div className='line'></div>
            <LanguageSelect
              $isSticky={isSticky}
              value={lang}
              onChange={setLang}
            />
          </div>
          <NavLinks />
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavBar;
