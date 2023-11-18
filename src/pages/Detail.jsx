import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveThreadDetail, asyncAddComment } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import ThreadComment from '../components/ThreadComment';
import ThreadReply from '../components/ThreadReply';

const Detail = () => {
  const { id } = useParams();
  const {
    threadDetail = null,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = ({ content, threadId }) => {
    dispatch(asyncAddComment({ content, threadId }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] mx-auto py-6 mb-14 grid gap-y-6">
      <h2 className="-mb-4 text-lg font-semibold">Detail Thread</h2>
      <ThreadDetail thread={threadDetail} />
      <ThreadReply addComment={onAddComment} threadId={threadDetail.id} />
      <section className="grid gap-y-0.5">
        <h3 className="text-lg font-semibold mb-3">{`Komentar (${threadDetail.comments.length})`}</h3>
        {
          threadDetail.comments.length
            ? threadDetail.comments.map((comment) => (
              <ThreadComment key={comment.id} comment={comment} />
            )) : ''
        }
      </section>
    </section>
  );
};

export default Detail;
