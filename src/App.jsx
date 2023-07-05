import React from 'react';
import './App.scss';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRouteAuth from './components/ProtectedRouteAuth';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register'
import Login from './components/Login'
import Main from './components/Main'
import Movies from './components/Movies';
import Profile from './components/Profile';
import SavedMovies from './components/SavedMovies';
import NotFound from './components/NotFound';
import { getMyUser, login, getMyMovies, updateProfile } from './utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: ''
  })
  const [savedMovies, setSavedMovies] = React.useState([])
  const [resultPlaceholder, setResultPlaceholder] = React.useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleAuthorize = async () => {
    if (localStorage.getItem('token')) {
      try {
        const user = await getMyUser();
        if (user) {
          setCurrentUser({
            name: user.name,
            email: user.email
          });
          setIsLoggedIn(true)
          navigate(location.pathname)
        }
        else {
          setCurrentUser({
            name: '',
            email: ''
          });
          setIsLoggedIn(false);
          navigate('/');
        }
      }
      catch (error) {
        setIsLoggedIn(false)
        navigate('/');
      }
    }
  }

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
      setServerError((error === 'Ошибка: 401') ? 'Неправильные почта или пароль' : 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    }
  }

  const handleFetchMovies = async () => {
    try {
    const movies = await getMyMovies();
    setSavedMovies(movies);
    return movies;
    }
    catch (error) {
      console.log(error);
      setResultPlaceholder('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    }
  }

  const handleLogout = () => {
    localStorage.clear();
    setCurrentUser({
      name: '',
      email: ''
    });
    setIsLoggedIn(false);
    navigate('/');
  }

  const handleUpdateProfile = async (name, email, setServerError, setIsEditable) => {
    try {
      setServerError('')
      const newUserData = await updateProfile(name, email)
      setCurrentUser({
        name: newUserData.name,
        email: newUserData.email
      })
      alert('Данные успешно обновлены!')
      setIsEditable(false);
    }
    catch (error) {
      setServerError((error === 'Ошибка: 400') ? 'Неккоректные почта или имя' : 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    }
  }

  React.useEffect(() => {
    handleAuthorize();
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    if (isLoggedIn) {
      handleFetchMovies()
    }
  }, [isLoggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="App">
          <Routes>
            <Route path='/' element={<><Header isLoggedIn={isLoggedIn} /><Main /><Footer /></>} />
            <Route path="/signup" element={<ProtectedRouteAuth component={Register} isLoggedIn={isLoggedIn} handleLogin={handleLogin}/>} />  
            <Route path="/signin" element={<ProtectedRouteAuth component={Login} isLoggedIn={isLoggedIn} isLogin={isLoggedIn} handleLogin={handleLogin}/>} />
            <Route path="/movies" element={
              <>
                <Header />
                <ProtectedRoute
                  component={Movies}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
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
                  savedMovies={savedMovies}
                  resultPlaceholder={resultPlaceholder}
                  handleFetchMovies={handleFetchMovies}
                  setSavedMovies={setSavedMovies}
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
                  handleLogout={handleLogout}
                  handleUpdateProfile={handleUpdateProfile}
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


