// src/components/ServicesCard.jsx
import { useState } from 'react';
import {
  FaSwimmingPool,
  FaShieldAlt,
  FaBicycle,
  FaParking,
} from 'react-icons/fa';
import { GiTennisCourt, GiShoppingCart, GiBabyBottle } from 'react-icons/gi';
import { LuBaby } from 'react-icons/lu';
import { MdSpa } from 'react-icons/md';
import Popup from './Popup';
import servicesPopup from '../utils/servicesPopup';
import { useTranslation } from 'react-i18next';

const icons = {
  Swimming_Pools: <FaSwimmingPool size={32} />,
  Health_Club_and_Spa: <MdSpa size={32} />,
  Commercial_Areas: <GiShoppingCart size={32} />,
  Security_and_Guarding: <FaShieldAlt size={32} />,
  Childrens_Area: <LuBaby size={32} />,
  Bicycle_Paths: <FaBicycle size={32} />,
  Sports_Fields: <GiTennisCourt size={32} />,
  Parking: <FaParking size={32} />,
};

const ServicesCard = ({ services }) => {
  const { t } = useTranslation('home');

  const [showPopup, setShowPopup] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleClick = (serviceName) => {
    setSelectedData(servicesPopup[serviceName]);
    setShowPopup(true);
  };

  return (
    <div className='grid' role='list'>
      {services.map((service, index) => {
        const label = service.replace(/_/g, ' ');
        return (
          <div
            type='button'
            onClick={() => handleClick(service)}
            className='card'
            role='listitem'
            aria-haspopup='dialog'
            aria-label={`${label} overview`}
            key={index}
          >
            <div className='card-icon'>{icons[service]}</div>
            <span className='line-highlight' aria-hidden />
            <span className='card-title'>
              {t(`services.items.${service}.title`).replace(/_/g, ' ')}
            </span>
          </div>
        );
      })}

      {showPopup && selectedData && (
        <Popup
          onClose={() => {
            setShowPopup(false);
            setSelectedData(null);
          }}
          data={selectedData}
        />
      )}
    </div>
  );
};

export default ServicesCard;
