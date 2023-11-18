import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaReply } from 'react-icons/fa';
import parser from 'html-react-parser';
import postedAt from '../utils/postedAt';
import UserCreated from './UserCreated';

const Thread = ({ thread }) => {
  return (
    <div className="shadow-md rounded bg-white px-4 py-6">
      <span className="border border-solid border-[#888] p-1 rounded-md text-base">{`#${thread.category}`}</span>
      <div className="flex flex-col gap-1.5 my-3">
        <Link to={`/thread/${thread.id}`}>
          <h3 className="text-lg font-semibold text-blue-900">{thread.title}</h3>
        </Link>
        <div className="text-base">{parser(thread.body)}</div>
      </div>
      <div className="flex gap-x-3">
        <p className="flex items-center gap-x-1.5">
          {thread.totalComments}
          <FaReply />
        </p>
        <p className="text-base text-[#888]">{postedAt(thread.createdAt)}</p>
        <UserCreated avatar={thread.user.avatar} name={thread.user.name} createdText />
      </div>
    </div>
  );
};

Thread.propTypes = {
  thread: PropTypes.shape({
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
  }),
};

export default Thread;
