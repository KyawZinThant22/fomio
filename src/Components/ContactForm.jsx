import React from "react";

const ContactForm = () => {
  return (
    <div className="lg:w-[40rem]">
      <h1 className="ContactHeader">Contact Form</h1>
      <form className="space-y-6 lg:mt-12 mt-6">
          <input className=" contact-class  "type="text" placeholder="Name" />
          <input className="block contact-class" type="text" placeholder="Phone" />
          <textarea placeholder="Message" className="contact-class w-full  lg:w-[80%] resize-none h-[10rem]"></textarea>
          <button className="bg-primary py-3 uppercase px-6   text-xl rounded text-white ">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
