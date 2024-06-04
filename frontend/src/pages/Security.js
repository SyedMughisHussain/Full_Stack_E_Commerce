import React from 'react';

const Security = () => {
  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Security</h1>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Security Measures</h2>
        <p className="leading-relaxed mb-4">
          We take your security seriously and have implemented a range of measures to ensure that your personal information is safe with us. Our website is secured with industry-standard SSL encryption to protect your data during transmission.
        </p>
        <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>All sensitive information is encrypted and transmitted securely.</li>
          <li>We regularly update our systems and software to maintain security.</li>
          <li>Access to your personal data is restricted to authorized personnel only.</li>
        </ul>
        <p className="leading-relaxed">
          If you have any concerns about the security of your information, please contact our customer support team. We are committed to keeping your personal data safe and secure.
        </p>
      </div>
    </div>
  );
};

export default Security;
