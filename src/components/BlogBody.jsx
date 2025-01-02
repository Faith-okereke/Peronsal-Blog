import React, {useContext} from "react";
import { DataContext } from "../contextStore/BlogContext";
import CommentSection from "./CommentSection";
export default function BlogBody() {
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
  const date = new Date();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
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


  return (
    <div>
      <div className="p-5">
        {blogData.map((blog, index) => (
          <div key={index}>
            <div>
              <div className="flex flex-col justify-between w-full">
                <h1 className="text-3xl font-bold">{blog.title} </h1>
                <p className="pt-2">By {blog.author}.</p>
              </div>
              <div>{fullDate}</div>
            </div>

            {image && (
              <img
                src={image}
                alt="Blog image"
                style={{ width: "100%", height: "auto" }}
              />
            )}
            <p className="text-lg pt-10">
              {blog.content}Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Temporibus architecto nam iusto ipsam quis! Voluptatem
              dignissimos cum soluta sapiente, corporis fuga. Eligendi
              perspiciatis magnam expedita, dolorem placeat aliquid facere
              blanditiis! Molestias cumque nisi modi vel illo, ea non dicta in
              placeat. Modi debitis nam vero, suscipit cupiditate architecto
              quam voluptate dolorum. Numquam autem nostrum exercitationem, at
              minima perspiciatis error ut. Cumque error aliquam blanditiis
              inventore quas? Nostrum, quam! Asperiores doloribus molestias
              delectus? Ipsa assumenda consectetur dignissimos? Maiores quasi
              eaque quibusdam beatae eius eveniet minus, quia obcaecati
              laboriosam recusandae dicta totam? Quibusdam tempora dolores, odio
              facilis fuga soluta veniam doloribus, tenetur nam magnam esse
              laborum. Ut incidunt voluptatibus alias maiores dolore illum,
              suscipit, beatae qui, distinctio magnam iure? Soluta, repellendus
              unde? Quos debitis eveniet eius sequi recusandae harum
              perspiciatis sapiente tempore? Saepe, reprehenderit sequi soluta
              eligendi, ipsa aliquid blanditiis deleniti iusto, velit fugiat
              illum magni autem enim! Quod earum doloribus sapiente! Sed,
              consequuntur. Asperiores placeat rem maiores hic alias nemo
              reprehenderit adipisci cumque quia deserunt excepturi, optio quod
              atque, nam ea et. A provident veniam error ea sint doloribus autem
              nemo. Rerum eius vel voluptatem dolores repellendus quae minus,
              consectetur placeat at. A placeat voluptatum, velit totam dolore
              officia labore eius sit ullam earum consequatur error,
              necessitatibus magnam laborum omnis ab. Inventore incidunt
              voluptate voluptatem aliquid, ducimus illum eaque at, eveniet
              provident soluta non quo fugiat temporibus dolore obcaecati ipsum
              corporis sit minima natus sunt molestiae. Excepturi laborum
              explicabo culpa corrupti! Doloremque in nulla rerum itaque
              obcaecati esse, ullam pariatur exercitationem dicta neque minima
              ducimus suscipit debitis tempore accusantium quibusdam sapiente,
              nihil incidunt ad possimus fugiat odio. Laudantium ex totam
              corrupti! Ad eveniet dicta ea et ut est, dolores, assumenda
              deleniti ab dolore aut? Eos, cum asperiores odit sint veniam
              tenetur, commodi consequuntur quis id vel, maiores illum qui iure
              deleniti? Quidem alias laboriosam tempora temporibus, enim fugit
              voluptas voluptatum ea? Eum repudiandae at dignissimos alias,
              repellat laudantium id officia vitae dolorum aliquam placeat
              voluptatem assumenda aliquid. Ut consequatur qui illum? Soluta,
              labore dolor autem excepturi corporis saepe, eos ullam fuga
              tenetur necessitatibus aperiam cumque enim. Mollitia nam laborum
              a, dolores ipsam rerum veritatis sint quisquam amet dignissimos
              quaerat, aperiam assumenda! Ipsa repellat maiores nemo eum
              officiis quaerat libero veritatis laudantium cupiditate facilis
              dolores fugit, recusandae deserunt et necessitatibus aspernatur
              perferendis nobis incidunt assumenda reprehenderit cum eaque
              excepturi deleniti! Illo, officia. Vitae cumque recusandae
              deleniti est facilis repellat maxime animi sequi impedit ab beatae
              praesentium eius culpa, similique, velit ut libero minus non,
              dolores debitis optio. Maiores, enim quisquam. Sit, quo? Dolor
              repudiandae at quas laboriosam, temporibus itaque quo fuga illum,
              nemo suscipit, cumque placeat numquam reprehenderit fugit atque
              quae delectus necessitatibus. Repellendus quis harum illo eaque
              dolorum voluptas praesentium vitae! Sapiente consequuntur
              perferendis autem tenetur ullam cupiditate ea blanditiis assumenda
              quo molestiae praesentium iure ratione, ducimus, incidunt tempore
              sunt non harum? Tempore, laboriosam vitae consequatur quo
              accusantium necessitatibus unde earum? Quibusdam corporis
              perferendis consequatur provident, pariatur, similique placeat
              enim laboriosam nesciunt velit incidunt nihil modi, ipsam illum
              laudantium repellat minima. Facilis consequatur unde eveniet.
              Alias facere voluptatibus obcaecati maxime quasi. Cupiditate
              repellat harum, quos fuga ad nam. Deleniti, tempore a architecto
              et, velit minus recusandae nesciunt corrupti ab id reiciendis hic
              optio consectetur ducimus? Ratione alias at quia molestias
              cupiditate. Sit repudiandae minus dolores deleniti! Reiciendis
              deserunt cum vel expedita accusamus accusantium beatae incidunt
              tempore? Exercitationem et est quis, eum mollitia voluptatum
              maiores molestiae recusandae a. Necessitatibus autem provident
              veritatis. Mollitia, nihil autem nesciunt sint velit recusandae
              ipsam. Odio numquam repellendus maiores impedit doloremque.
              Dolorum iste assumenda, qui dicta ea, consectetur amet magni
              fugiat inventore sapiente sunt exercitationem culpa rem.
            </p>
          </div>
        ))}
      </div>
      {!inputModal && <CommentSection />}
    </div>
  );
}
