import styled from 'styled-components';

const MenuButtonWrapper = styled.button`
  background: transparent;
  border: none;
  color: ${({ $open }) => ($open ? 'var(--black)' : 'var(--white)')};
  font-size: 2rem;
  cursor: pointer;
  transition: var(--transition);
  z-index: 9999;

  ${({ $open }) =>
    $open &&
    `
    transform: rotate(90deg);
  `}
`;
export default MenuButtonWrapper;
