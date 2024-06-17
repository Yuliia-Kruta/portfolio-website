import 'bootstrap/dist/css/bootstrap.min.css';
import "react-vertical-timeline-component/style.min.css"
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Timeline />
    </div>
  );
}

export default App;
