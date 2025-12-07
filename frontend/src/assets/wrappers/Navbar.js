import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100vw;
  height: ${({ $isSticky }) => ($isSticky ? '3rem' : '6rem')};
  position: ${({ $isSticky }) => ($isSticky ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  z-index: 11;
  background: transparent;
  box-shadow: none;
  font-family: 'Rubik';

  .test {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0 3rem;
    justify-content: space-between;
    align-items: center;
    /* color: var(--white); */
    font-weight: 100;
    font-size: 0.8rem;
    .news {
      white-space: nowrap;
      font-size: 0.8rem;
    }

    a {
      font-weight: 350;
      /* color: var(--white); */
    }
  }
  .line {
    height: 1.5rem;
    width: 0.05rem;
    background-color: ${({ $isSticky }) =>
      $isSticky ? '#050505' : 'var(--white)'};
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 7rem; */
    width: 100%;
    height: 100%;
    /* padding: 0 4rem; */

    background-color: ${({ $isSticky }) =>
      $isSticky ? 'var(--primary-100)' : 'transparent'};
    box-shadow: ${({ $isSticky }) =>
      $isSticky ? '0 8px 8px rgba(0, 0, 0, 0.17)' : 'none'};

    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    transform: ${({ $isSticky, $showNavbar }) =>
      $isSticky && !$showNavbar ? 'translateY(-110%)' : 'translateY(0)'};

    pointer-events: ${({ $isSticky, $showNavbar }) =>
      $isSticky && !$showNavbar ? 'none' : 'auto'};
    will-change: transform;
    padding: 0 1rem;
  }

  .logo-container {
    /* padding-left: 1rem; */
  }
  .logo1 {
    display: ${({ $isSticky }) => ($isSticky ? 'none' : 'block')};
  }
  .logo2 {
    display: ${({ $isSticky }) => ($isSticky ? 'block' : 'none')};
  }

  .logo {
    transition: var(--transition);
    width: ${({ $isSticky }) => ($isSticky ? '7rem' : '10rem')};
  }

  .big-bar {
    display: flex;
    /* gap: 2rem; */
    align-items: center;
    justify-content: center;

    .nav-link {
      color: ${({ $isSticky }) => ($isSticky ? '#050505' : 'var(--white)')};
      /* font-size: 1rem; */
    }

    li:hover {
      span {
        height: 2rem;
      }
      .nav-link {
        color: ${({ $isSticky }) =>
          $isSticky ? 'var(--primary-900)' : 'var(--primary-400)'};
      }
    }
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }
  .nav-link {
    display: block;
    transition: var(--transition);
    text-decoration: none;
    font-weight: 500;
  }
  li {
    text-transform: uppercase;
    position: relative;
    list-style: none;
  }

  span {
    position: absolute;
    width: 5px;
    height: 0;
    background-color: var(--white);
    top: -2.7rem;
    left: 50%;
    transform: translate(-50%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.15s ease-in-out;
  }

  .toggle-btn {
    display: none;
    position: fixed; /* pin to viewport */
    top: 1rem;
    left: 1rem;
    z-index: 10050; /* above AsideMenu */
    background: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--white); /* visible over hero; tweak if needed */
  }

  @media (max-width: 52.5rem) {
    .nav-link {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 48rem) {
    .toggle-btn {
      display: flex;
    }
    .big-bar {
      display: none;
    }
    .logo {
      display: none;
    }

    /* keep navbar rendered so the toggle exists */
    .navbar {
      background: transparent;
      box-shadow: none;
      transform: translateY(0); /* don't hide the toggle on scroll */
      pointer-events: auto;
      padding: 0 1rem;
    }
  }
`;

export default Wrapper;
