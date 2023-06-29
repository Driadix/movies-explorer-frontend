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
import { getMyUser, login } from './utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: ''
  })
  const navigate = useNavigate();

  const handleAuthorize = async () => {
    if (localStorage.getItem('token')) {
      try {
        const user = await getMyUser();
        if (user) {
          setCurrentUser({
            name: user.name,
            email: user.email
          });
          setIsLoggedIn(true);
        }
      }
      catch (error) {
        setIsLoggedIn(false)
        navigate('/');
      }
    }
  }

  React.useEffect(() => {
    console.log(isLoggedIn)
  }, [isLoggedIn])

  const handleLogin = async (email, password, setServerError) => {
    try {
      const newTokenObject = await login(email, password)
      const newToken = newTokenObject.token;
      if (newToken) {
        localStorage.setItem('token', newToken)
        await handleAuthorize();
      }
    }
    catch (error) {
      setServerError(error)
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path='/' element={<><Header isIntroPage={true} /><Main /><Footer /></>} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/movies" element={
            <>
              <Header />
              <ProtectedRoute
                component={Movies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
              <Footer />
            </>
          }
          />
          <Route path="/saved-movies" element={
            <>
              <Header />
              <ProtectedRoute
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
              <Footer />
            </>
          }
          />
          <Route path="/profile" element={
            <>
              <Header />
              <ProtectedRoute
                component={Profile}
                isLoggedIn={isLoggedIn}
              />
            </>
          }
          />
          <Route
            path="*"
            element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;


