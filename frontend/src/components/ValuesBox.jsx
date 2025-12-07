import Wrapper from '../assets/wrappers/ValuesBox';

const ValuesBox = ({ icon, title, text }) => {
  return (
    <Wrapper>
      <div className='card-box'>
        {icon && <div className='card-icon'>{icon}</div>}
        <div className='separator'></div>
        <h3 className=' card-title'>{title}</h3>
        <p className='card-text'>{text}</p>
      </div>
    </Wrapper>
  );
};
export default ValuesBox;
