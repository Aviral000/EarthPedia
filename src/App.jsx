import React from 'react'
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Header from './components/Header';

const config = {
  url: "http://localhost:8082"
}

export { config };

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/post-maker' element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
