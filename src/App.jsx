import React from 'react';
import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register'
import Login from './components/Login'
import Main from './components/Main'
import Movies from './components/Movies';
import Profile from './components/Profile';
import SavedMovies from './components/SavedMovies';
import NotFound from './components/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({})

  const handleLogin = () => {

  }

  const handleRegister = () => {

  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header isIntroPage={true}/><Main/><Footer/></>} />
        <Route
            path="/signup"
            element={<Register onRegister={handleRegister} isLoading={isLoading} />}
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} isLoading={isLoading} />} />
          <Route path="/movies" element={<><Header/><Movies isLoading={isLoading} setIsLoading={setIsLoading} /><Footer/></>} />
          <Route path="/saved-movies" element={<><Header /><SavedMovies isLoading={isLoading} /><Footer/></>} />
          <Route path="/profile" element={<><Header /><Profile isLoading={isLoading} /></>} />
          <Route
            path="*"
            element={<NotFound isLoading={isLoading} />} />
      </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
