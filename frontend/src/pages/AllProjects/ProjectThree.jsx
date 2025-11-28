import { Template, InspirationSection } from '../../layout/ProjectTemplate';
import img1 from '../../assets/images/AllProjectsGallery/ProjectOne/img1.jpg';
import img2 from '../../assets/images/AllProjectsGallery/ProjectOne/img2.jpg';
import img3 from '../../assets/images/AllProjectsGallery/ProjectOne/img3.jpg';
import img4 from '../../assets/images/AllProjectsGallery/ProjectOne/img4.jpg';
import img5 from '../../assets/images/AllProjectsGallery/ProjectOne/img5.jpg';

const images = [img1, img2, img3, img4, img5];
const tags = [
  'ONCE MALL',
  'NEW CAIRO, 2025',
  'COMMERCIAL HUB',
  'FLASH INVESTMENT',
];
const desc =
  'Once Mall by Wealth Developments is the newest commercial landmark in New Cairo — designed to redefine shopping and lifestyle. With world-class retail, dining, and entertainment spaces, Once Mall brings together luxury, convenience, and opportunity under one roof. A true destination for investors, brands, and families alike.';

const ProjectThree = () => {
  return (
    <>
      <Template images={images} tags={tags} desc={desc} />
      <InspirationSection quote='ONCE IN ONCE – WHERE LIFESTYLE MEETS INVESTMENT' />
    </>
  );
};

export default ProjectThree;
