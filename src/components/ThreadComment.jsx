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
      <p className="text-[#888]">{postedAt(comment.created)}</p>
    </div>
  );
};

ThreadComment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default ThreadComment;
