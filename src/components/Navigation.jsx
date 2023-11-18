import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaRegComments, FaTrophy, FaPlusCircle,
} from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="fixed w-full bottom-0 bg-[#14213D]">
      <div className="flex p-2 justify-evenly w-[90%] sm:w-[85%] md:w-[70%] xl:w-[55%] mx-auto">
        <Link to="/">
          <FaRegComments className={`text-4xl ${path === '/' ? 'text-blue-500' : 'text-white'}`} />
        </Link>
        <Link to="/leaderboards">
          <FaTrophy className={`text-4xl ${path === '/leaderboards' ? 'text-blue-500' : 'text-white'}`} />
        </Link>
        <Link to="/thread/add">
          <FaPlusCircle className={`text-4xl ${path === '/thread/add' ? 'text-blue-500' : 'text-white'}`} />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
