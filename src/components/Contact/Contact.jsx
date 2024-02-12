import React from "react";
import SectionHeading from "../UI/SectionHeading/SectionHeading";

export default function Contact() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column py-2">
      <SectionHeading text="contact section" color="blue" />
      <form className="w-50 py-5">
      <input type="text"  className="form-control my-5 border-0 border-bottom border-bottom-1" placeholder="name"/>
      <input type="text"  className="form-control my-5 border-0 border-bottom border-bottom-1" placeholder="age"/>
      <input type="text"  className="form-control my-5 border-0 border-bottom border-bottom-1" placeholder="email"/>
      <input type="text"  className="form-control my-5 border-0 border-bottom border-bottom-1" placeholder="password"/>
      <button style={{backgroundColor: '#1ABC9C'}} className="btn text-white">send Message</button>
      </form>
    </div>
  );
}
