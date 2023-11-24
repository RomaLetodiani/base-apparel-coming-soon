import './MobileHero.scss';
import mobilehero from '../assets/images/hero-mobile.jpg';
const MobileHero = () => {
  return (
    <div className="mobile-hero">
      <img src={mobilehero} alt="mobile-hero" />
    </div>
  );
};

export default MobileHero;
