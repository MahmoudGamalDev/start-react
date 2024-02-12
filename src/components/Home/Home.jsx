import React from "react";
import img from "../../imgs/avataaars.svg";
import SectionHeading from "../UI/SectionHeading/SectionHeading";

export default function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center flex-column py-5">
      <picture className="w-75 d-flex justify-content-center align-items-center py-5">
        <img src={img} alt="avatar" className="w-25" />
      </picture>
      <SectionHeading text="start framework" color="white" />
      <p className="text-center text-white pt-2 pb-4">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
