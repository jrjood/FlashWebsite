import styled, { css, keyframes } from 'styled-components';

// Keyframe animations - Optimized for performance
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const rotateIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
`;

// Animation variants
const animations = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  rotateIn,
};

// Styled component with dynamic animation
export const ScrollReveal = styled.div`
  opacity: 0;

  ${({
    $isVisible,
    $animation = 'fadeInUp',
    $duration = '0.8s',
    $delay = '0s',
  }) =>
    $isVisible &&
    css`
      animation: ${animations[$animation]} ${$duration} ease-out ${$delay}
        forwards;
    `}
`;

// Stagger children animation
export const StaggerContainer = styled.div`
  > * {
    opacity: 0;
  }

  ${({
    $isVisible,
    $animation = 'fadeInUp',
    $duration = '0.6s',
    $staggerDelay = '0.1s',
  }) =>
    $isVisible &&
    css`
      > *:nth-child(1) {
        animation: ${animations[$animation]} ${$duration} ease-out 0s forwards;
      }
      > *:nth-child(2) {
        animation: ${animations[$animation]} ${$duration} ease-out
          calc(${$staggerDelay} * 1) forwards;
      }
      > *:nth-child(3) {
        animation: ${animations[$animation]} ${$duration} ease-out
          calc(${$staggerDelay} * 2) forwards;
      }
      > *:nth-child(4) {
        animation: ${animations[$animation]} ${$duration} ease-out
          calc(${$staggerDelay} * 3) forwards;
      }
      > *:nth-child(5) {
        animation: ${animations[$animation]} ${$duration} ease-out
          calc(${$staggerDelay} * 4) forwards;
      }
      > *:nth-child(6) {
        animation: ${animations[$animation]} ${$duration} ease-out
          calc(${$staggerDelay} * 5) forwards;
      }
      > *:nth-child(7) {
        animation: ${animations[$animation]} ${$duration} ease-out
          calc(${$staggerDelay} * 6) forwards;
      }
      > *:nth-child(8) {
        animation: ${animations[$animation]} ${$duration} ease-out
          calc(${$staggerDelay} * 7) forwards;
      }
      > *:nth-child(9) {
        animation: ${animations[$animation]} ${$duration} ease-out
          calc(${$staggerDelay} * 8) forwards;
      }
      > *:nth-child(10) {
        animation: ${animations[$animation]} ${$duration} ease-out
          calc(${$staggerDelay} * 9) forwards;
      }
    `}
`;

export default ScrollReveal;
