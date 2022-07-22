import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const SERVICE_ID = "service_ohgjvse";
  const TEMPLATE_ID = "template_w9klt0v";
  const PUBLIC_KEY = "6UzjHDcq3nPpL0ekf";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      setName("")
      setMessage("")
      setPhone("")
  };

  return (
    <div className="lg:w-[40rem]">
      <h1 className="ContactHeader">Contact Form</h1>
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="space-y-6 lg:mt-12 mt-6"
      >
        <input
          className="   block p-3 rounded lg:w-[80%] w-full border border-solid border-nonWhite text-xl "
          type="text"
          name="user_name"
          placeholder="Name"
          value={name}
          onChange={e=>setName(e.target.value)}
        
        />
        <input
          className=" block p-3 rounded lg:w-[80%] w-full border border-solid border-nonWhite text-xl  "
          type="text"
          name="user_phone"
          placeholder="Phone"
          value={phone}
          onChange={e=>setPhone(e.target.value)}
        />
        <textarea
          placeholder="Message"
          name="message"
          className=" block p-3 rounded  border border-solid border-nonWhite text-xl   w-full  lg:w-[80%] resize-none h-[10rem]"
          value={message}
          onChange={e=>setMessage(e.target.value)}
          
       
        ></textarea>
        <button
          type="submit"
          aria-label="send message btn"
          className="bg-primary py-3 uppercase px-6   text-xl rounded text-white "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
