import React from 'react';
import PropTypes from 'prop-types';

const Leaderboard = ({ leaderboard, authUser }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={leaderboard.user.avatar} alt={leaderboard.user.name} className="w-10 rounded-full" />
        <h3 className="text-lg font-medium">{`${leaderboard.user.name} ${leaderboard.user.id === authUser && '(Anda)'}`}</h3>
      </div>
      <p className="text-xl font-medium">{leaderboard.score}</p>
    </div>
  );
};

Leaderboard.propTypes = {
  leaderboard: PropTypes.shape({
    score: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default Leaderboard;
