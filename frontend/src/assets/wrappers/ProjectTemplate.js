import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--black);
  padding: 2rem;
  text-align: center;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  .tag-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-bottom: 1rem;
  }

  .content {
    height: 0;
  }
  .tag-dot {
    font-size: 0.9rem;
    font-weight: 600;
    position: relative;
    &::before {
      content: '';
      height: 0.8rem;
      width: 0.8rem;
      border-radius: 50%;
      font-size: 2rem;
      background-color: var(--primary-400);
      position: absolute;
      /* top: 50%; */
      left: -1.5rem;
    }
  }

  .slider-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
  }

  .main-image,
  .main-video {
    width: auto;
    height: 25rem;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  /*  .thumbnails {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
  } */

  .thumbnails video {
    position: relative;
  }

  .video-badge {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 2.5rem;
    transform: translate(-50%, -80%);
  }
  .thumbnails img,
  .thumbnails video,
  .thumb-video {
    width: 100%;
    border-radius: 0.5rem;
    height: 6rem;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .thumbnails img.active,
  .thumbnails video.active {
    border-color: orange;
  }

  .arrows {
    display: flex;
    gap: 6rem;
    justify-content: center;
    align-items: center;
  }
  .arrow {
    background: none;
    color: var(--primary-400);
    font-size: 2rem;
    /* position: absolute; */
    top: 50%;
    /* transform: translateY(-200%); */
    cursor: pointer;
    z-index: 1;
    border: none;
  }

  .arrow.left {
    left: 0;
  }

  .arrow.right {
    right: 0;
  }
  .project-details {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    gap: 1rem;
    color: var(--white);
    font-family: 'Rubik';
    align-self: flex-start;
  }
  .details-title {
    color: var(--primary-400);
  }
  .slider-container {
    position: relative;
    width: 100%;
    max-width: 700px;
    margin: auto;
  }

  .main-image {
    width: 100%;
    border-radius: 8px;
  }

  .thumbnails {
    margin-top: 1rem;
    width: 100%;
  }

  .thumb {
    width: 100%;
    height: auto;
    border-radius: 4px;
    opacity: 0.6;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: opacity 0.3s, border 0.3s;
  }

  .thumb.active {
    opacity: 1;
    border: 2px solid orange;
  }
`;

export default Wrapper;
