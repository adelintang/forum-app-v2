import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Register from '../components/Register';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="mt-8 p-4 grid gap-y-4">
      <h2 className="text-lg font-semibold text-center">Register</h2>
      <Register register={onRegister} />
      <p className="text-base mt-3 text-center">
        Kembali ke
        <Link to="/" className="underline text-blue-500"> Login</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
