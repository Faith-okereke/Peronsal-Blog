import React, { useEffect, useState } from "react";
import blogImage from "../assets/BlogBag.jpg";
import BlogImage from "../assets/BlogImage.jpg"
export default function Home() {
  const [blogsData, setBlogsData] = useState({
    posts: [],
    authors: [],
  });
  useEffect(() => {
    fetch("src/data/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        setBlogsData(data.blog);
      })
      .catch((error) => console.error("Error fetching JSON", error));
  }, []);
  const dateLength = 10;
  return (
    <div className="">
      <div>
        <img
          src={blogImage}
          alt=""
          className="w-full h-[350px] object-cover relative"
        />
        <h1 className="font-bold text-6xl text-left p-4 absolute top-52 left-[40%] playwrite-au-vic-guides-regular">
          NneBlog
        </h1>
      </div>
      <h2 className="pt-6 font-bold text-2xl text-center underline uppercase">Explore other Trending Blogs</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center pt-10 px-4">
        {blogsData.posts.map((blog, index) => (
          <div key={index}>
            <div className={` rounded-lg px-2 py-3 cursor-pointer`}>
              <div className="p-2 h-[400px] md:h-[400px]  shadow-2xl border-[2px] border-off-white hover:border-primary transition-colors rounded-lg">
                <div
                  className={`flex gap-1 text-[9px] rounded-sm p-1 w-fit bg-[#a5a5a5] text-white ml-2`}
                >
                  {blog.tags &&
                  Array.isArray(blog.tags) &&
                  blog.tags.length > 0 ? (
                    blog.tags.map((tag, index) => (
                      <React.Fragment key={index}>
                        <p>{tag.toUpperCase()}</p>
                        {index < blog.tags.length - 1 && <p>|</p>}{" "}
                      </React.Fragment>
                    ))
                  ) : (
                    <p>No tags available</p>
                  )}
                </div>
                <div className="p-2 flex flex-col justify-end items-end">
                  <img src={BlogImage} alt="" />
                  <div>
                    <h1 className="font-bold">{blog.title}</h1>
                    <p>{blog.content}</p>
                  </div>

                  <div className="flex flex-col justify-between mb-auto items-center text-sm align-text-bottom">
                    {blogsData.authors.map((author, authorIndex) => (
                      <p key={authorIndex} className="">
                        {author.name}
                      </p>
                    ))}
                    <p>{blog.datePublished.substring(0, dateLength)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
