// src/components/ImageUpload.jsx
import React, { useState, useRef, useContext } from "react";
import { DataContext } from "../contextStore/BlogContext";
import { MdAddCircle } from "react-icons/md";
const ImageUpload = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const fileInputRef = useRef();
  const { image, setImage } = useContext(DataContext);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && content && image) {
      setPosts([...posts, { title, content, image }]);
      setTitle("");
      setContent("");
      setImage(null);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />
      <i onClick={handleUploadClick} className="my-12 cursor-pointer">
        <MdAddCircle width={100} height={100} fill=" #ffa726 " />
      </i>
      {image && (
        <img
          src={image}
          alt="Preview"
          style={{ width: "100vw", height: "400px", objectFit:"cover" }}
          className="mt-6 rounded-lg"
        />
      )}
    </div>
  );
};

export default ImageUpload;
