import React from "react";

const BlogCard = ({ title, description, imageSrc, tags, blogLink }) => {
  return (
    <a href={blogLink} target="_blank">
      <div className="min-w-sm rounded-md overflow-hidden shadow-lg bg-neutral-900 cursor-pointer scale-[0.99] hover:scale-[1] transition ease-linear duration-75">
        <img
          className="w-full h-[250px] object-cover object-center"
          src={imageSrc}
          alt="blog icon"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-white mb-2">{title}</div>
          <p className="text-white/70 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((data, i) => (
            <span
              key={i}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-neutral-700 mr-2 mb-2"
            >
              #{data}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
