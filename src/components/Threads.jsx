import React from 'react';
import PropTypes from 'prop-types';
import Thread from './Thread';

const Threads = ({ threads }) => {
  return (
    <div className="grid gap-1">
      {
        threads.map((thread) => <Thread key={thread.id} thread={thread} />)
      }
    </div>
  );
};

Threads.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({
    authUser: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    totalComments: PropTypes.number.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  })),
};

export default Threads;
