import React from 'react';

import Wrapper from '../assets/wrappers/PageStarter';

const PageStarter = ({ title, imgPath }) => {
  return (
    <Wrapper $imgPath={imgPath} id='hero' className='section-container'>
      <div className='content '>
        <h2 className='info'> {title}</h2>
      </div>
    </Wrapper>
  );
};

export default PageStarter;
