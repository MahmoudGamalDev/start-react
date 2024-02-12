import React from "react";
import SectionHeading from "../UI/SectionHeading/SectionHeading";

export default function About() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        backgroundColor: "#1ABC9C",
        paddingTop: "200px",
        paddingBottom: "200px",
      }}
    >
      <SectionHeading text="about component" color="white" />
      <div className="row w-75 mt-3 text-white">
        <p className="col-md-6">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="col-md-6">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
