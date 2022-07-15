import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Landing from './Landing/Landing';
import AboutUs from './AboutUs/AboutUs';
import Posts from './posts/Posts';
import Privacy from './components/Privacy/Privacy';
import TermConditions from './components/Terms/TermConditions';
import RefundReturn from './components/RefundReturn/RefundReturn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='about.us' element={<AboutUs />} />
        <Route path='privacy.policy' element={<Privacy />} />
        <Route path='privacy.policy' element={<Privacy />} />
        <Route path='terms.conditions' element={<TermConditions />} />
        <Route path='refund.return' element={<RefundReturn />} />
        <Route path='posts' element={<Posts />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
