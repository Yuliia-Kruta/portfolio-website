import 'bootstrap/dist/css/bootstrap.min.css';
import "react-vertical-timeline-component/style.min.css"
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
    </div>
  );
}

export default App;
