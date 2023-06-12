import React from 'react';
import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register'
import Login from './components/Login'
import Main from './components/Main'
import Movies from './components/Movies';
import Profile from './components/Profile';
import SavedMovies from './components/SavedMovies';

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
        <Route path='/' element={<><Header isIntroPage={true}/><Main/><Footer/></>} />
        <Route
            path="/signup"
            element={<Register onRegister={handleRegister} isLoading={isLoading} />}
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} isLoading={isLoading} />} />
          <Route path="/movies" element={<Movies isLoading={isLoading} />} />
          <Route path="/saved-movies" element={<SavedMovies isLoading={isLoading} />} />
          <Route path="/profile" element={<Profile isLoading={isLoading} />} />
          <Route
            path="*"
            element={
              <ProtectedRoute
                component={Movies}
                
              />
            }
          />
      </Routes>
    </div>
  );
}

export default App;
