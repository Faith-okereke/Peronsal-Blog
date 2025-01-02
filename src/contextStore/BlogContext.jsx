import React, {useState} from "react";

export const DataContext = React.createContext();
function BlogContext({ children }) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [image, setImage] = useState(null);
  const [blogData, setBlogData] = useState([]);
  const [inputModal, setInputModal] = useState(true);
  return (
    <div>
      <DataContext.Provider
        value={{
          blog,
          setBlog,
          image,
          setImage,
          blogData,
          setBlogData,
          inputModal,
          setInputModal,
        }}
      >{children}</DataContext.Provider>
    </div>
  );
}
export default BlogContext;
