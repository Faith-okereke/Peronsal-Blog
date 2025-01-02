import React, { useContext } from "react";
import { DataContext } from "../contextStore/BlogContext";
import ImageUpload from "../components/ImageUpload";
import { PiArrowCircleUpRight } from "react-icons/pi";
import { Link } from "react-router-dom";
export default function NewBlogModal() {
  const {
    blog,
    setBlog,
    image,
    setImage,
    blogData,
    setBlogData,
    inputModal,
    setInputModal,
  } = useContext(DataContext);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const addBlog = () => {
    if (blog.title == "" || blog.content == "" || blog.author == "") {
      alert("Enter your blog details");
      return false;
    } else {
      console.log(blogData);
      setInputModal(false);
      setBlogData([...blogData, blog]);
      setBlog({
        title: "",
        content: "",
        author: "",
      });
    }
  };
  return (
    <div>
      {inputModal && (
        <form className="flex flex-col justify-start items-center p-5 pt-8 bg-red-200  h-screen">
          <h2 className="font-bold text-2xl">Create New Post</h2>
          <div className="pt-3 flex flex-col justify-start">
            <label className="font-semibold pr-3 pb-3" htmlFor="">
              Blog title
            </label>
            <input
              className="p-2 rounded-sm border-0 outline-0"
              type="text"
              name="title"
              id="title"
              value={blog.title}
              onChange={handleChange}
            />
          </div>
          <div className="p-3 flex flex-col  justify-start">
            <div className="mb-3 flex items-center justify-between">
              <label className="font-semibold pr-3" htmlFor="blog-content">
                Blog content
              </label>
              <div
                onClick={() => alert("Expand Context box?")}
                className="cursor-pointer"
              >
                <PiArrowCircleUpRight />
              </div>
            </div>

            <textarea
              className="p-2  rounded-sm border-0 outline-0 resize-none"
              type="text"
              name="content"
              id="content"
              value={blog.content}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className=" flex flex-col justify-start">
            <label className="font-semibold pr-3 pb-3" htmlFor="blog-author">
              Blog author
            </label>
            <input
              className="p-2 rounded-sm border-0 outline-0"
              type="text"
              name="author"
              id="author"
              value={blog.author}
              onChange={handleChange}
            />
          </div>
          <ImageUpload image={image} />
          <button
            onClick={addBlog}
            type="submit"
            className="bg-black rounded-lg p-3 text-white hover:bg-lightGray hover:text-black  hover:bg-white my-4  md:w-[400px] w-full"
          >
            <Link>Add blog</Link>
          </button>
        </form>
      )}
    </div>
  );
}
