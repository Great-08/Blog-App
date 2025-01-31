import { useState } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Createpost from './Pages/Createpost';
import { signOut } from "firebase/auth";
import { auth } from '../Firebase-config';
import EditPost from "./Pages/EditPost";
import './index.css';
import Register from "./Pages/Register"

const App = () => {

  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const logout = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      signOut(auth).then(() => {
        localStorage.removeItem('isAuth');
        setIsAuth(false);
        navigate('/');
      }).catch((error) => {
        console.log(error.message)
      })
    }
    
  }

  return (
    <div>
      <Navbar isAuth={isAuth} logout={logout}/>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}/>
        <Route path="/createpost" element={<Createpost isAuth={isAuth} />}/>
        <Route path="/editpost/:id" element={<EditPost isAuth={isAuth} />}/>
        <Route path="/register" element={<Register setIsAuth={setIsAuth} />}/>
      </Routes>
    </div>
  )
};

export default App;
