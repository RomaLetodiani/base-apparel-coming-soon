import hero from './assets/images/hero-desktop.jpg';
import MobileHero from './components/MobileHero';
import Header from './components/header/Header';
import Main from './components/main/Main';
const App = () => (
  <div className="content">
    <div className="container">
      <Header />
      <MobileHero />
      <Main />
    </div>
    <img src={hero} alt="hero" />
  </div>
);

export default App;
