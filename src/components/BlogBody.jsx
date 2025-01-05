import React, { useContext } from "react";
import { DataContext } from "../contextStore/BlogContext";
import CommentSection from "./CommentSection";
import { useParams } from "react-router-dom";
export default function BlogBody() {
  const { image, blogData, inputModal } = useContext(DataContext);
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
    <div>
      <div className="p-5">
        {/* {blogSpecify.map((blog, index) => ( */}
          <div key={index}>
            <div>
              <div className="flex flex-col justify-between w-full">
                <h1 className="text-3xl font-bold">{blogSpecify.title} </h1>
                <p className="pt-2">By John Doe</p>
              </div>
              <div>{fullDate}</div>
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
            <p className="text-lg pt-10">{blogSpecify.content}</p>
          </div>
        {/* // ))} */}
      </div>
      {!inputModal && <CommentSection />}
    </div>
  );
}
