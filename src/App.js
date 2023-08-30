import NavCore from './components/navigation/shared/NavCore';
import Home from './components/views/home/Home';
import About from './components/views/about/About'
import Projects from './components/views/projects/Projects'
import Contact from './components/views/contact/Contact';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavCore />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/projects' element = {<Projects />} />
        <Route path='/contact' element = {<Contact />} />
      </Routes>
    </>  
  )
}

export default App