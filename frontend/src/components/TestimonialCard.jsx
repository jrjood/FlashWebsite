import Wrapper from '../assets/wrappers/TestimonialCard';

const TestimonialCard = ({ path, alt, name, role, rate, feedback }) => {
  return (
    <Wrapper>
      <img className='client-image' src={path} alt={alt} />
      <h4 className='client-name'>{name}</h4>
      <p className='client-role'>{role}</p>
      <div className='stars'>{rate}</div>
      <p className='feedback'>"{feedback}"</p>
    </Wrapper>
  );
};
export default TestimonialCard;
