import 'bootstrap/dist/css/bootstrap.min.css';
import "react-vertical-timeline-component/style.min.css"
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Timeline />
    </div>
  );
}

export default App;
