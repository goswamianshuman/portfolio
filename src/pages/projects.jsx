import React from "react";
import { projects as myProjects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const projects = () => {
  return (
    <section className="min-h-screen bg-[#09090a]">
      <div className="max-container text-white">
        <h1 className="head-text text-[white]">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow-sm shadow-black/10">
            Project's
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-white/70">
          <p>
            Check out my favorite projects, some are open-source. Feel free to
            dive into the code and share your ideas – I value your
            collaboration! 🍉
          </p>
        </div>

        <div className="flex flex-wrap my-20 gap-16">
          {myProjects.map((data) => (
            <div className="lg:w-[400px]  w-full" key={data.name}>
              <div className="block-container w-12 h-12">
                {/* <div className={`btn-back rounded-xl ${data.theme}`} /> */}
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={data.iconUrl}
                    alt="project icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {data.name}
                </h4>
                <p className="mt-2 text-white/70">{data.description}</p>
                <div className="mt-5 flex items-center font-poppins gap-2">
                  <Link
                    to={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    view live
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-black/30" />

        <CTA />
      </div>
    </section>
  );
};

export default projects;
