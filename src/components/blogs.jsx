import React from "react";
import BlogCard from "./blogCard";
import { blogs } from "../constants/index";

const Blogs = () => {
  return (
    <div className="py-10">
      <h3 className="subhead-text text-white">My Blogs</h3>
      <p className="text-white/70 mt-3">
        Recently, I started crafting compelling blogs that sparkle with insight.
        If you crave a glimpse into brilliance, feel free to take a peek.
      </p>

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
        {blogs.map((data, i) => (
          <BlogCard
            key={i}
            title={data.title}
            description={data.des}
            imageSrc={data.imgUrl}
            tags={data.tags}
            blogLink={data.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
