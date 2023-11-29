import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Invoice from './components/Invoice';
import Leftside from './components/Leftside';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Pricing from './components/Pricing';

function App() {
  return (
    <div>
      <div className='logoAndNav'>
        <div className='image'>
          <Logo />
        </div>
      </div>
      <hr />
      <hr id='horiz' />
      <div className='heading'>
        <div id='headingtyi'>
          <Heading />
        </div>
        <div className='NavigationBar'>
          <Navigation />
        </div>
      </div>
      <hr id='horiz2' />
      <div className="left">
        <Leftside />
      </div>
      <div className='mainArea'>
        <Content />
      </div>
      <div className='right'>
        <Invoice />
      </div>
      <div className="Pricing">
        <Pricing />
      </div>
      <div className='footer'>
        <div className='footer-content'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
