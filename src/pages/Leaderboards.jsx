import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetLeaderboards } from '../states/leaderboards/action';
import Leaderboard from '../components/Leaderboard';

const Leaderboards = () => {
  const {
    leaderboards,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, [dispatch]);

  return (
    <section className="w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] mx-auto grid gap-y-4 mt-6 pb-20">
      <h2 className="text-lg font-semibold">Klasmen Pengguna Aktif</h2>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">Pengguna</p>
        <p className="text-lg font-medium">Skor</p>
      </div>
      {
        leaderboards.map((leaderboard) => (
          <Leaderboard
            key={leaderboard.user.id}
            leaderboard={leaderboard}
            authUser={authUser.id}
          />
        ))
      }
    </section>
  );
};

export default Leaderboards;
