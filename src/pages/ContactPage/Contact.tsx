import React from "react";

const Contact = () => {
  return (
    <section className="bg-blue-800 p-1 flex flex-col items-center mt-[60px] text-white">
      <h1 className="text-3xl font-bold mb-2 text-center">Contact Me</h1>
      <p className="text-center mb-4">
        Have any questions or want to get in touch? Fill out the form below!
      </p>
      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md text-blue-800">
        <div className="mb-1">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-1 border border-blue-800 rounded-lg focus:outline-none focus:border-blue-950"
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-1 border border-blue-800 rounded-lg focus:outline-none focus:border-blue-950"
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="message" className="block font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={2}
            className="w-full p-1 border border-blue-800 rounded-lg focus:outline-none focus:border-blue-950"
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-800 text-white hover:bg-blue-900 p-2 rounded-lg transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
