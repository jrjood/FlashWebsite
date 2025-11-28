const Founders = ({ owner_image, ownerName, ownerTitle, ownerBio }) => {
  return (
    <div className='img-box'>
      <img src={owner_image} className='owner-img'></img>
      <div className='overlay'></div>
      <div className='img-text'>
        <h3 className='owner-name'>{ownerName}</h3>
        <p className='owner-title'>{ownerTitle}</p>
        <p className='owner-bio'>{ownerBio}</p>
        <div className='separator'></div>
      </div>
    </div>
  );
};

export default Founders;
