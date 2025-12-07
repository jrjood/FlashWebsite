import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import useMediaQuery from '../utils/useMediaQuery';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cards = ({ gridRows, cardsData }) => {
  const { t } = useTranslation('home');
  const isMobile = useMediaQuery('(max-width: 48rem)');
  const featuredProjects = cardsData
    .filter((p) => p.isFeatured == 1)
    .slice(0, 5);

  return (
    <>
      {isMobile && (
        <div className='small-screen'>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
            speed={800}
          >
            {cardsData.map((proj, i) => (
              <SwiperSlide key={proj.id || i}>
                <Link to={`/projects/${proj.title}`} className='card-slide'>
                  <img
                    className='img'
                    src={proj.coverImage}
                    alt={t(proj.key)}
                    loading='lazy'
                    decoding='async'
                  />
                  <div className='overlay' />
                  <p className='label'>{t(proj.title)}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className={gridRows}>
        {featuredProjects.map((proj, i) => (
          <Link
            to={`/projects/${proj.title}`}
            className={i === 0 ? 'card big-card' : 'card'}
            key={proj.id}
          >
            <img
              className='img'
              src={proj.coverImage}
              alt={t(proj.key)}
              loading='lazy'
              decoding='async'
            />
            <div className='overlay' />
            <p className='label'>{t(proj.title)}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Cards;
