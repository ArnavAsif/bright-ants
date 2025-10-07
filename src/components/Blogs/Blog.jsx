import redBg from "../../assets/bg-we.png";
import blueBg from "../../assets/bg-blue.png";
import blogImg from "../../assets/blogImg2.svg";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
const API = "https://bright-ants-backend.onrender.com";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`${API}/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.data));
  }, [id]);

  if (!blog)
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black to-red-950">
        <div className="text-center">
          {/* Gradient spinner */}
          <div className="mx-auto mb-4 w-16 h-16 border-4 border-t-red-600 border-b-black border-l-black border-r-red-600 rounded-full animate-spin"></div>

          {/* Loading text */}
          <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
          <p className="text-gray-300">
            Please wait while we fetch the content.
          </p>
        </div>
      </div>
    );

  return (
    <div className="max-w-[1310px] mx-auto pt-8 sm:pt-[96px] pb-12 relative z-10 overflow-hidden mb-10 sm:mb-[100px]">
      {/* Background Images */}
      <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-90 pointer-events-none">
        <div className="grid grid-cols-2 h-full">
          <img src={redBg} alt="Red BG" className="w-full object-contain" />
          <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
        </div>
      </div>

      {/* Header */}
      <div className="max-w-[1034px] mx-auto px-[43px] space-y-[10px] relative z-10">
        <h1>Blog</h1>
        <p className="text-center font-bold">{"Home > Blog"}</p>
      </div>

      {/* Main Image */}
      <div className="mt-12 lg:h-[344px]">
        <img src={blogImg} alt="blog" className="w-full h-full" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[353px_1fr] gap-4 mt-10 sm:mt-[100px] px-[20px] lg:px-0">
        {/* Left Links - hidden on mobile */}
        <div className="hidden lg:block">
          {/* Quick Links */}
          <div>
            <div className="flex items-center justify-between w-full text-white">
              <span className="pb-2 relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-2 after:border-[#005DAA] text-lg font-bold">
                Quick Links
              </span>
            </div>
            <ul className="mt-4 space-y-4 font-normal text-white">
              <li>
                <NavLink
                  to="/service/graphicsDesign"
                  className="hover:text-red-500"
                >
                  Graphics Design
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service/digitalMediaDesign"
                  className="hover:text-red-500"
                >
                  Digital Media Design
                </NavLink>
              </li>
              <li>
                <NavLink to="/service/webDesign" className="hover:text-red-500">
                  Web Design
                </NavLink>
              </li>
              <li>
                <NavLink to="/service/UIandUX" className="hover:text-red-500">
                  UI and UX
                </NavLink>
              </li>
              <li>
                <NavLink to="/service/wordPress" className="hover:text-red-500">
                  WordPress
                </NavLink>
              </li>
            </ul>
          </div>

          {/* In This Article */}
          <div className="mt-16">
            <div className="flex items-center justify-between w-full text-white">
              <span className="pb-2 relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-2 after:border-[#005DAA] text-lg font-bold">
                In this article
              </span>
            </div>
            <ul className="mt-4 space-y-4 font-normal text-white">
              <li>
                <NavLink
                  to="/service/graphicsDesign"
                  className="hover:text-red-500"
                >
                  Graphics Design
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service/digitalMediaDesign"
                  className="hover:text-red-500"
                >
                  Digital Media Design
                </NavLink>
              </li>
              <li>
                <NavLink to="/service/webDesign" className="hover:text-red-500">
                  Web Design
                </NavLink>
              </li>
              <li>
                <NavLink to="/service/UIandUX" className="hover:text-red-500">
                  UI and UX
                </NavLink>
              </li>
              <li>
                <NavLink to="/service/wordPress" className="hover:text-red-500">
                  WordPress
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Blog Content */}
        <div>
          <h1 className="text-left">{blog.title}</h1>
          <p className="italic text-[#8A8A8A] text-sm font-figtree mb-4 mt-[6px]">
            {blog.created_at
              ? new Date(blog.created_at).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "N/A"}
          </p>
          <p className="text-lg text-[#D8D8D8] font-mulish leading-6">
            {blog.content}
          </p>

          <div className="lg:h-[344px] my-16">
            <img
              src={`${API}/files/${blog.image}`}
              alt="blog"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-lg text-[#D8D8D8] font-mulish leading-6">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
