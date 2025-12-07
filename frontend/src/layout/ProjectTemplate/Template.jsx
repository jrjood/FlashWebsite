import { ImageSlider, TagList, PageStarter } from '../../components';
import Wrapper from '../../assets/wrappers/ProjectTemplate';

const Template = ({ images, tags, desc }) => {
  return (
    <Wrapper>
      <PageStarter />
      <TagList tags={tags} />
      <ImageSlider images={images} />

      <div className='project-details'>
        <h2 className='details-title'>Project details</h2>
        <p>{desc}</p>
      </div>
    </Wrapper>
  );
};
export default Template;
