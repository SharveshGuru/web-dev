import './App.css';
import About from './components/About.js'
import Blog from './components/Blog.js';
import Contact from './components/Contact.js'
import Voting from './components/Voting.js'
import Clicker from './components/Clicker.js'
import Home from './components/Home.js'
import Layout from './components/Layout.js'
import Department from './components/Department.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/voting" element={<Voting />}></Route>
        <Route path="/clicker" element={<Clicker />}></Route>
        <Route path="/department" element={<Department />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
