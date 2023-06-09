import React from 'react';
import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register'
import Login from './components/Login'
import Main from './components/Main'
import Intro from './components/Intro';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = () => {

  }

  const handleRegister = () => {

  }



  return (
    <div className="App">
      <Routes>
        <Route path='/intro' element={<><Header isIntroPage={true}/><Intro/><Footer/></>} />
        <Route
            path="/sign-up"
            element={<Register onRegister={handleRegister} isLoading={isLoading} />}
          />
          <Route path="/sign-in" element={<Login onLogin={handleLogin} isLoading={isLoading} />} />
          <Route
            path="*"
            element={
              <ProtectedRoute
                component={Main}
                
              />
            }
          />
      </Routes>
    </div>
  );
}

export default App;
