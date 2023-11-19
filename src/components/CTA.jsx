import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section className="">
      <div className="cta">
        <p className="cta-text">
          Got some toughts for project's in mind?{" "}
          <br className="sm:block hidden" />
          Let's create something together!
        </p>

        <Link to="/contact" className="btn">
          Connect here
        </Link>
      </div>
      <div className="cta">
        <p className="text-white/90 tracking-wide font-bold flex-1 text-2xl max-md:text-center">
          Feel free to reach me out with social's:
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((data, i) => (
            <Link to={data.link} target="_blank" className="">
              <img className="h-7 w-7" src={data.iconUrl} alt="social links" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
