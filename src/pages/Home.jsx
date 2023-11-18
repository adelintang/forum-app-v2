import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import Threads from '../components/Threads';

const Home = () => {
  const {
    users = [],
    threads = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] mx-auto py-6 text-[#14213D] mb-14">
      <h2 className="text-lg font-semibold mb-3">Threads</h2>
      <Threads threads={threadsList} />
    </section>
  );
};

export default Home;
