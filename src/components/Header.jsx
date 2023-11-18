import React from 'react';
import PropTypes from 'prop-types';
import { FaSignOutAlt } from 'react-icons/fa';

const Header = ({ authUser, logout }) => {
  return (
    <header className={`bg-[#14213D] p-4 lg:px-8 sticky top-0 ${authUser ? 'flex justify-between items-center' : ''}`}>
      <h1 className="text-white text-xl font-semibold text-center">Forum App</h1>
      {
        authUser
        && (
        <nav className="flex items-center gap-x-3">
          <button
            type="button"
            onClick={logout}
            className="flex gap-x-2"
          >
            <span className="text-lg font-medium text-white">{authUser.name}</span>
            <FaSignOutAlt className="text-3xl text-white" />
          </button>
          <img
            src={authUser.avatar}
            alt={`avatar ${authUser.name}`}
            className="rounded-full w-10"
          />
        </nav>
        )
      }
    </header>
  );
};

Header.propTypes = {
  authUser: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  logout: PropTypes.func,
};

export default Header;
