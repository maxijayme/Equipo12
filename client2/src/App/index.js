import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from '../containers/Contact';
import Login from '../containers/Login';
import Feed from '../containers/Feed'
import Error from '../containers/Error'
import Register from '../containers/Register';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AdminPanel from '../containers/AdminPanel';
import UserProfile from '../containers/UserProfile'
import Form from '../containers/Form'
import Friends from '../containers/Friends';

function App() {
  return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Feed/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/admin" element={<AdminPanel/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route path="/profile/:username" element={<UserProfile/>}/>
            <Route exact path="/form" element={<Form/>}/>
            <Route exact path='/friends' element={<Friends/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </Router>
    )
}

export default App;
