import 'bootstrap/dist/css/bootstrap.min.css';
import "react-vertical-timeline-component/style.min.css"
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useContext, useState } from 'react';
import ProjectDetails from './components/ProjectDetails';
import { Footer } from './components/Footer';
import { ThemeContext } from './Theme';
import References from './components/References';

function App() {

  const { theme } = useContext(ThemeContext);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div className={`App ${theme}`}>
      <NavBar />
      <Hero />
      <Skills />
      <Projects openModal={openModal} setOpenModal={setOpenModal}/>
      <Timeline />
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
      <References />
      <Footer />
    </div>
  );
}

export default App;
