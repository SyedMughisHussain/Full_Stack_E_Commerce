import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Return Policy</h1>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Return Policy</h2>
        <p className="leading-relaxed mb-4">
          We hope you love your purchase, but if you are not completely satisfied, you can return your item(s) within 30 days of the purchase date for a full refund. Items must be unused, in the original packaging, and in the same condition that you received them.
        </p>
        <h3 className="text-xl font-semibold mb-2">How to Return</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Contact our customer service team to initiate the return process.</li>
          <li>Pack your items securely in the original packaging.</li>
          <li>Include your receipt or proof of purchase.</li>
          <li>Ship the package to our return address.</li>
        </ul>
        <p className="leading-relaxed">
          Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain amount of days.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
