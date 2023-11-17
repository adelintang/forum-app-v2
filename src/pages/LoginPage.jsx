import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <section className="mt-8 p-4 grid gap-y-4">
      <h2 className="text-lg font-semibold text-center">Login</h2>
      <Login />
      <p className="text-base mt-3 text-center">
        Belum punya akun?
        <Link to="/register" className="underline text-blue-500"> registrasi</Link>
      </p>
    </section>
  );
};

export default LoginPage;
