import React from 'react';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa';
import useInput from '../hooks/useInput';

const ThreadReply = ({ addComment, threadId }) => {
  const [content, setContent] = useInput('');

  const submitHandler = (event) => {
    event.preventDefault();
    addComment({ content, threadId });
  };

  return (
    <form
      className="bg-white p-3 rounded shadow"
      onSubmit={submitHandler}
    >
      <h3 className="text-lg font-semibold mb-2">Komentari</h3>
      <div
        className="border border-solid border-[#14213D] rounded p-2 h-28 text-base outline-none focus:ring-1 focus:ring-[#14213D]"
        contentEditable="true"
        value={content}
        onInput={(e) => setContent(e.target.innerHTML)}
      />
      <button
        type="submit"
        aria-label="send comment"
        className="mt-3 flex gap-x-1.5 items-center bg-[#14213D] hover:bg-blue-600 py-1 px-2 rounded"
      >
        <span className="text-base text-white">kirim</span>
        <FaPaperPlane className="text-lg text-white" />
      </button>
    </form>
  );
};

ThreadReply.propTypes = {
  addComment: PropTypes.func.isRequired,
  threadId: PropTypes.string.isRequired,
};

export default ThreadReply;
