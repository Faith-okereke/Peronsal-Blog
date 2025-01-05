import React, { useState } from "react";

export const DataContext = React.createContext();
function BlogContext({ children }) {

  //State  to manage the image to be uploaded to post
  const [image, setImage] = useState("");
  //State to store the blog details post
  const [blogData, setBlogData] = useState([]);
  //State to mange the details of the blog input
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: image,
  });
  return (
    <DataContext.Provider
      value={{
        blog,
        setBlog,
        image,
        setImage,
        blogData,
        setBlogData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default BlogContext;
