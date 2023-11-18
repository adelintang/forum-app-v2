import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from '../components/Login';
import { asyncSetAuthUser } from '../states/authUser/action';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="mt-8 p-4 grid gap-y-4">
      <h2 className="text-lg font-semibold text-center">Login</h2>
      <Login login={onLogin} />
      <p className="text-base mt-3 text-center">
        Belum punya akun?
        <Link to="/register" className="underline text-blue-500"> registrasi</Link>
      </p>
    </section>
  );
};

export default LoginPage;
