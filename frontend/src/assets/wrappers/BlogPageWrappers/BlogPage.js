import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--primary-300);
  color: var(--black);
  padding: 4rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    /* Very dark at bottom */ rgba(105, 105, 105, 0.19) 11%,
    /* Still dark */ var(--primary-300) 11%,
    /* Start fading fast */ var(--primary-300) 55% /* Fully transparent */
  );

  .grid {
    display: grid;
    grid-column-gap: 1.7rem;
    grid-row-gap: 2rem;
  }
  .cols-4 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .card {
    /* height: 50rem; */
    display: flex;
    flex-direction: column;
    /* height: fit-content; */
  }
  .start-img-box {
    width: 40%;
  }
  .section-container {
    display: flex;
    justify-content: center;
    gap: 6rem;
    align-items: center;

    /* justify-content: end; */
  }
  .news-title {
    font-weight: bold;
    color: var(--black);
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
  }
  .post-image-box {
    /* width: 20rem; */
    /* height: 10rem; */
    /* width: 100%; */
    width: 40vh;
    height: 25vh;
    margin-bottom: 1.5rem;
    overflow: hidden;
  }
  .post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all ease-in-out 0.4s;
  }

  .post-image:hover {
    transform: scale(1.1);
  }

  .post-date {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .post-title {
    font-size: 1.7rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }
  .post-body {
    font-size: 1.3rem;
    color: var(--grey);
    margin-bottom: 0.7rem;
    color: var(--grey-400);
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Show max 3 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .card-body {
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    /* justify-content: end; move all items to bottom */
  }
  .post-link:link,
  .post-link:visited {
    /* margin-top: auto; */
    color: var(--grey-800);
    /* text-decoration: underline; */
    border-bottom: 1px black solid;
    /* display: inline-block; */
    width: fit-content;
    transition: 0.3s all ease-in-out;
    font-size: 1.3rem;
  }

  .post-link:hover,
  .post-link:active {
    border-bottom: 1px solid transparent;
  }
`;

export default Wrapper;
