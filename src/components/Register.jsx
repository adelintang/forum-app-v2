import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const Register = ({ register }) => {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const inputStyles = 'bg-white px-3 py-1.5 rounded text-base outline-none border border-solid border-[#14213D] focus:ring-1 focus:ring-[#14213D]';

  const submitHandler = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <form
      className="bg-white shadow-md rounded p-4 flex flex-col gap-y-3 w-[100%] sm:w-[90%] sm:mx-auto md:w-[75%] xl:w-[55%]"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="masukkan nama"
        className={inputStyles}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="masukkan email"
        className={inputStyles}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="masukkan password"
        className={inputStyles}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        aria-label="register button"
        className="rounded py-1.5 mt-4 font-medium bg-[#14213D] text-white hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
