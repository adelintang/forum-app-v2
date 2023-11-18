import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import postedAt from '../utils/postedAt';
import UserCreated from './UserCreated';

const ThreadDetail = ({ thread }) => {
  return (
    <div className="shadow-md rounded bg-white px-4 py-6">
      <span className="border border-solid border-[#888] p-1 rounded-md text-base">{`#${thread.category}`}</span>
      <div className="flex flex-col gap-1.5 my-3">
        <h3 className="text-lg font-semibold text-blue-900">{thread.title}</h3>
        <div className="text-base">{parser(thread.body)}</div>
      </div>
      <div className="flex gap-x-3">
        <p className="text-base text-[#888]">{postedAt(thread.createdAt)}</p>
        <UserCreated avatar={thread.owner.avatar} name={thread.owner.name} createdText />
      </div>
    </div>
  );
};

ThreadDetail.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default ThreadDetail;
