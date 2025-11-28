import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  display: inline-block;
  /* font-family: system-ui, Arial, sans-serif; */
  transition: all 0.3s ease-in-out;
`;

export const Button = styled.div`
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0;
  background: transparent;
  border: none;
  color: ${({ $isSticky }) => ($isSticky ? '#050505' : 'var(--white)')};
  /* font-size: 1.1rem; */
  cursor: pointer;
  line-height: 1.2;
`;

export const Chevron = styled.div`
  display: inline-block;
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')})
    translateY(${({ $open }) => ($open ? '0.2rem' : '0')});
  transition: all 0.2s ease;
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const Listbox = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  /* min-width: 5rem; */
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  background: #fff;
  color: #111;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  z-index: 2000;
`;

export const Option = styled.li`
  padding: 0.45rem 0.75rem;
  cursor: pointer;
  white-space: nowrap;

  &[aria-selected='true'],
  &:hover {
    background: #f5f5f5;
  }
`;
