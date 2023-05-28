import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from '../containers/Contact';
import Login from '../containers/Login';
import Feed from '../containers/Feed'
import Layout from '../components/Layout/Layout';
import Register from '../containers/Register';
import Footer from '../components/Footer'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AdminPanel from '../containers/AdminPanel';
import Navbar from '../components/Navbar';
import UserProfile from '../containers/UserProfile'

function App() {
  return (
    <main >
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Feed/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/admin" element={<AdminPanel/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route path="/profile/:username" element={<UserProfile/>}/>
          </Routes>
          <Footer/>
        </Router>
    </main>
    )
}

export default App;
