import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="container mx-auto p-6 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-5">
          Thank you for your purchase!
        </h1>
        <p className="text-lg">
          We appreciate your business and hope you enjoy your new purchase.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
