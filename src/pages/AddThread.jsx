import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';

const AddThread = () => {
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [body, setBody] = useInput('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputStyles = 'border border-solid border-[#14213D] px-3 py-1.5 rounded outline-none focus:ring-1 focus:ring-[#14213D]';

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };

  return (
    <div className="w-[95%] sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto">
      <h2 className="mt-6 mb-4 text-lg font-semibold">Buat Threads Baru</h2>
      <form
        className="shadow rounded p-4 flex flex-col gap-y-3 bg-white"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="judul thread"
          className={inputStyles}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="kategori thread"
          className={inputStyles}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div
          className="border border-solid border-[#14213D] rounded p-2 h-28 text-base outline-none focus:ring-1 focus:ring-[#14213D]"
          contentEditable="true"
          value={body}
          onInput={(e) => setBody(e.target.innerHTML)}
        />
        <button
          type="submit"
          className="rounded py-1.5 mt-4 font-medium bg-[#14213D] text-white hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddThread;
