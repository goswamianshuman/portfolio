import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Got some toughts for project's in mind?{" "}
        <br className="sm:block hidden" />
        Let's create something together!
      </p>

      <Link to="/contact" className="btn">
        Connect here
      </Link>
    </section>
  );
};

export default CTA;
