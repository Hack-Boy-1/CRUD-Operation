import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './Components/Pages/Home';
import About from './Components/Pages/AboutUs';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import NotFound from './Components/Pages/NotFound';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import AddUser from './Components/User/AddUser';
import EditUser from './Components/User/EditUser';
import ViewUser from './Components/User/ViewUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/user/edit/:id" element={<EditUser />} />
          <Route exact path="/user/view/:id" element={<ViewUser />} />
          <Route exact path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
