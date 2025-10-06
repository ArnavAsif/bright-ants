import redBg from "../../assets/bg-we.png";
import blueBg from "../../assets/bg-blue.png";
import blog from "../../assets/blogImg.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Blogs = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <div className="max-w-[1310px] mx-auto pt-[96px] pb-12 relative z-10 overflow-hidden">
      <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-90 pointer-events-none">
        <div className="grid grid-cols-2 h-full">
          <img src={redBg} alt="Red BG" className="w-full object-contain" />
          <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
        </div>
      </div>
      <div className="max-w-[1034px] mx-auto px-[43px] space-y-[10px] relative z-10">
        <h1>Blog</h1>
        <p className="text-center font-bold">{"Home > Blog"}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 px-4 lg:px-0">
        {users.map((user) => (
          <Link to={`/blogs/${user.id}`} key={user.id}>
            {/* Gradient wrapper */}
            <div className="w-full sm:w-[404px] p-[2px] border border-[#3A3A3A] hover:bg-gradient-to-r hover:from-[#2B70EA] hover:to-[#EA0B24] transition-all duration-500">
              {/* Inner card */}
              <div className="p-5 sm:p-8  bg-[#1C1A1F] shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)]  h-full hover:bg-[#191B24] transition-all duration-200 ease-in-out">
                <img
                  src={blog}
                  alt="blog"
                  className="w-full h-[220px] object-cover"
                />
                <div className="mt-6">
                  <h2 className="mb-[6px] text-3xl font-extrabold font-figtree">
                    {user.name}
                  </h2>
                  <p className="italic text-[#8A8A8A] text-sm font-figtree mb-4">
                    02 Oct 2025
                  </p>
                  <p className="text-lg text-[#D8D8D8] mt-2 font-mulish leading-6 ">
                    Great design isn't just about looks—it's about experience.
                    At BrightAnts, we craft seamless, intuitive, and visually
                    engaging user interfaces that enhance user journeys and
                    drive engagement. Our UI/UX design process blends creativity
                    with usability, ensuring your digital products are not only
                    beautiful but also highly functional.
                  </p>
                  <p className="underline mt-8 text-lg font-figtree">
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
