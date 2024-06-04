import React from "react";

const ContactUs = () => {
  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-4">
          We'd love to hear from you! Please fill out the form below or reach us
          at our contact details.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Our Contact Details
          </h2>
          <p className="mt-4 text-gray-600">
            Feel free to reach out to us directly at:
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Email:</strong> syedmughis4541@gmail.com
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Phone:</strong> +92 319 3039832
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Address:</strong> Main Shahrah-e-Faisal, near PC Hotel
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
