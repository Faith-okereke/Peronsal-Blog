import React from "react";

export default function CommentSection() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold pb-6">
        Like the read?
        <br /> Support the creator by dropping comments and likes on this post.
      </h1>
      <form action="">
        <div className="flex flex-col">
          <label className=" pb-2" htmlFor="name">
            Name<span className="text-pink-800 pl-1 font-bold">*</span>
          </label>
          <input
            className="p-2 border-2 border-black"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className=" pb-2" htmlFor="commentBox">
            Comment<span className="text-pink-800 pl-1 font-bold">*</span>
          </label>
          <textarea
            className="p-2 border-2 border-black h-[300px] resize-none"
            name=""
            id=""
          ></textarea>
        </div>
        <button className="bg-pink-600 p-3 rounded-md text-white mt-3 border-0 hover:bg-pink-200">
          Send Comment
        </button>
      </form>
    </div>
  );
}
