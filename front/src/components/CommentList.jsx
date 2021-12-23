import React from 'react';
import Comment from '../components/Comment';

export default function CommentList() {
  return (
    <section className="flex flex-col items-center -mt-5 mb-2">
      <div className="flex flex-col items-center gap-2.5 w-45rem rounded-md border bg-white">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </section>
  );
}
