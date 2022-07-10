import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Landing from './Landing/Landing';
import AboutUs from './AboutUs/AboutUs';
import Posts from './posts/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='about.us' element={<AboutUs />} />
        <Route path='posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
