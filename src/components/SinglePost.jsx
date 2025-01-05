import React, { useContext } from "react";
import BlogPost from "../assets/FormBg.jpg";
import { RxAvatar, RxTimer } from "react-icons/rx";
import { DataContext } from "../contextStore/BlogContext";
import { useParams } from "react-router-dom";
const SinglePost = () => {
  const { blogData, image } = useContext(DataContext);
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = days[date.getDay()];
  const hour = date.getHours();
  const minute = date.getMinutes();
  let datereal = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  datereal = datereal < 10 ? `0${datereal}` : datereal;
  const fullDate = day + "-" + datereal + "-" + month + "-" + year;

  const { id } = useParams();
  const blogSpecify = blogData.find((post) => post.id === parseInt(id));
  if (!blogSpecify) {
    return <p className="text-center text-xl pt-20">Blog post not found.</p>;
  }
  return (
    <div className="flex p-3 ">
      <div className="p-6 w-[70%]">
        <div className="flex justify-between items-center w-full pb-2">
          <h2 className="text-3xl font-bold">{blogSpecify.title}</h2>
          <div className="flex gap-3 justify-center">
            <div className="flex items-center gap-1">
              <i>
                <RxAvatar />
              </i>
              <p>Johh Doe</p>
            </div>
            <div className="flex items-center gap-1">
              <i>
                <RxTimer />
              </i>
              <p>{hour} hours Ago</p>
            </div>
          </div>
        </div>
        {image && (
          <img
            src={image}
            alt="Blog image"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "30px",
            }}
            className="mt-8"
          />
        )}
        <div>
          <img
            src={BlogPost}
            className="h-[500px] w-full object-cover"
            alt=""
          />
        </div>
        <p className="pt-5 text-[20px]">{blogSpecify.content}</p>
        <div className="w-[30%]"></div>
      </div>
    </div>
  );
};
export default SinglePost;
