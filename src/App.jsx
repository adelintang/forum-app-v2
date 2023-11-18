import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import AddThread from './pages/AddThread';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

const App = () => {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <div className="min-h-screen bg-[#EEE]">
          <Header />
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="min-h-screen bg-[#EEE]">
        <Header authUser={authUser} logout={onLogout} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thread/add" element={<AddThread />} />
          </Routes>
        </main>
        <footer>
          <Navigation />
        </footer>
      </div>
    </>
  );
};

export default App;
