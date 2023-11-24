import MobileHero from './components/MobileHero';
import Header from './components/header/Header';
import Main from './components/main/Main';
import useMediaQuery from './hooks/useMediaQuery';
const App = () => (
  <div className="content">
    <div className="container">
      <div className="wrapper">
        <Header />
        {useMediaQuery('(max-width: 769px)') && <MobileHero />}
        <Main />
      </div>
    </div>
    {useMediaQuery('(min-width: 769px)') && <div className="img-div" />}
  </div>
);

export default App;
