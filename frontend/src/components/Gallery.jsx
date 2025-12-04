import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function Gallery({ media = [] }) {
  const images = media.filter((m) => m.type === 'image').map((m) => m.url);
  const videos = media.filter((m) => m.type === 'video');
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className='grid cols-3'>
        {images.map((src, i) => (
          <div
            key={i}
            className='card'
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
          >
            <img src={src} alt='' loading='lazy' decoding='async' />
          </div>
        ))}
        {videos.map((v) => (
          <div key={v.id} className='card'>
            <video
              controls
              src={v.url}
              style={{ width: '100%', height: 160, objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          mainSrc={images[idx]}
          nextSrc={images[(idx + 1) % images.length]}
          prevSrc={images[(idx + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setIdx((idx + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setIdx((idx + 1) % images.length)}
        />
      )}
    </div>
  );
}
