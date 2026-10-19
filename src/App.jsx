import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
  return (<>
    <a className="skip" href="#work">Skip to work</a>
    <Header /><main><Hero /><SelectedWork /><Services /><Process /><About /><Contact /></main><Footer />
  </>);
}
