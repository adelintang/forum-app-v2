import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <section className="mt-8 p-4 grid gap-y-4">
      <h2 className="text-lg font-semibold text-center">Register</h2>
      <Register />
      <p className="text-base mt-3 text-center">
        Kembali ke
        <Link to="/" className="underline text-blue-500"> Login</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
