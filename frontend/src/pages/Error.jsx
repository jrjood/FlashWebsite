import { Link, useRouteError } from 'react-router-dom';

import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();

  // Handle 404 - when error exists or when accessed via catch-all route
  if (!error || error?.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='Not found' />
          <h3>Ohh! page not found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    );
  }

  // Handle other errors
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
