import React, { useContext } from "react";
import { DataContext } from "../contextStore/BlogContext";
import ImageUpload from "../components/ImageUpload";
import { useNavigate } from "react-router-dom";
export default function NewBlogModal() {
  const {
    blog,
    setBlog,
    image,
    setImage,
    blogData,
    setBlogData,
  } = useContext(DataContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const createPost = () => {
    if (blog.title === "" || blog.content === "") {
      alert("Provide a title and a content");
      return false;
    } else {
      setBlogData([...blogData, blog]);
    }
    console.log(blog);
    navigate(`/blog/${blogData.length + 1}`);
    setBlog({ title: "", content: "" });
    setImage(null);
  };
  return (
    <div>
      <form className="flex flex-col justify-start p-5 pt-8">
        <div className="flex justify-between w-full items-center">
          <h2 className="font-bold text-2xl">Create New Post</h2>
          <button
            type="button"
            onClick={createPost}
            className="bg-secondary rounded-lg p-2 text-sm text-white hover:bg-lightGray hover:text-black  hover:bg-white hover:border-secondary border-2 transition-colors "
          >
            Publish blog
          </button>
        </div>

        <div className="mt-10">
          <input
            className=" rounded-sm border-0 outline-0  text-4xl font-semi-bold placeholder:text-4xl placeholder:font-thin w-full pb-8 h-24"
            type="text"
            name="title"
            id="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <div className="flex justify-start gap-1 flex-col">
            <ImageUpload image={image} setImage={setImage} />

            <textarea
              className="h-screen rounded-sm border-0 outline-0 resize-none w-full mt-4"
              type="text"
              name="content"
              id="content"
              value={blog.content}
              onChange={handleChange}
              placeholder="Start writing..."
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
