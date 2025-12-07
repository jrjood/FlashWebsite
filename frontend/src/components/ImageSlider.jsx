import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const ImageSlider = ({ images = [] }) => {
  // keep only known types
  const items = images.filter((m) => m.type === 'image' || m.type === 'video');

  const [current, setCurrent] = useState(0);

  if (!items.length) return null;

  const currentItem = items[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='slider-container'>
      {/* Main area: image OR video */}
      <div className='main-media'>
        {currentItem.type === 'image' ? (
          <img
            className='main-image'
            src={currentItem.url}
            alt={`Slide ${current}`}
            loading='lazy'
            decoding='async'
          />
        ) : (
          <video
            className='main-video'
            src={currentItem.url}
            controls
            playsInline
            preload='metadata'
            loading='lazy'
          />
        )}
      </div>

      {/* Arrows */}
      <div className='arrows'>
        <button className='arrow left' onClick={handlePrev}>
          ‹
        </button>
        <button className='arrow right' onClick={handleNext}>
          ›
        </button>
      </div>

      {/* Thumbnails (images + videos) */}
      <div className='thumbnails'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          loop={false}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2 },
            350: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            769: { slidesPerView: 5 },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={`Thumb ${index}`}
                  className={`thumb ${index === current ? 'active' : ''}`}
                  onClick={() => setCurrent(index)}
                />
              ) : (
                <div
                  className={`thumb thumb-video ${
                    index === current ? 'active' : ''
                  }`}
                  onClick={() => setCurrent(index)}
                >
                  {/* tiny muted video as preview */}
                  <video src={item.url} muted playsInline />
                  <span className='video-badge'>▶</span>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
