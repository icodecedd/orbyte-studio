import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import './assets/global.css';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to='home' replace />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='team' element={<Team />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='*' element={<Navigate to='home' replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
