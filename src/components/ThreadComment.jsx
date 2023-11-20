import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import postedAt from '../utils/postedAt';
import UserCreated from './UserCreated';

const ThreadComment = ({ comment }) => {
  return (
    <div className="shadow bg-white grid gap-y-3 p-3 rounded">
      <UserCreated avatar={comment.owner.avatar} name={comment.owner.name} />
      <div>{parser(comment.content)}</div>
      <p className="text-[#888]">{postedAt(comment.createdAt)}</p>
    </div>
  );
};

ThreadComment.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    upVotesBy: PropTypes.array.isRequired,
  }).isRequired,
};

export default ThreadComment;
