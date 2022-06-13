import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/Loginpage';
import RegisterPage from 'pages/RegisterPage';
import './firebase'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route exact path="/register" element={<RegisterPage/>}/>
    </Routes>
  );
}

export default App;
