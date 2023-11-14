import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const about = () => {
  return (
    <section className="min-h-screen bg-[#09090a]">
      <div className="max-container">
        <h1 className="head-text text-[white]">
          Hey, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow-sm shadow-black/10">
            Anshuman
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-white/70">
          <p>
            Full Stack Software Developer based in India, on a mission to turn
            creative ideas into powerful digital solutions. From frontend
            finesse to backend brilliance, I'm your go-to tech enthusiast for
            building the extraordinary on the web! 🚀
          </p>
        </div>

        <div className="py-10 flex flex-col mt-5">
          <h3 className="subhead-text text-white">My Skills</h3>
          <p className="text-white/70 mt-3">
            Check out my hands-on experience with various tech stacks in this
            concise list.
          </p>

          <div className="mt-12 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2
                   object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text text-white">Work Experience</h3>
          <p className="text-white/70 mt-3">
            It's been 2 years since I entered the industry, learning and growing
            every day. Here is a list of organizations I have worked with
            previously:
          </p>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#101010",
                    color: "#fff",
                    borderBottom: "2px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #101010",
                  }}
                  date={experience.date}
                  iconStyle={{ background: "#09090a" }}
                  icon={
                    <div className="flex items-center justify-center h-full w-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                >
                  <div>
                    <h3 className="text-xl text-white font-poppins">
                      {experience.title}
                    </h3>
                    <p
                      className={`font-medium font-base`}
                      style={{ margin: 0, color: experience.iconBg }}
                    >
                      {experience.company_name}
                    </p>

                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {experience.points.map((point, i) => (
                        <li key={i} className="text-white/50 pl-1 text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-black/30" />

        <CTA />
      </div>
    </section>
  );
};

export default about;
