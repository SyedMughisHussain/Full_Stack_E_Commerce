import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Privacy Policy</h2>
        <p className="leading-relaxed mb-4">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data.
        </p>
        <h3 className="text-xl font-semibold mb-2">Information Collection</h3>
        <p className="leading-relaxed mb-4">
          We collect information that you provide directly to us, such as when you create an account, place an order, or contact us. This may include your name, email address, phone number, and payment information.
        </p>
        <h3 className="text-xl font-semibold mb-2">Use of Information</h3>
        <p className="leading-relaxed mb-4">
          We use your information to process transactions, provide customer support, and improve our services. We may also use your information to send you promotional materials, but you can opt-out at any time.
        </p>
        <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
        <p className="leading-relaxed mb-4">
          We implement a variety of security measures to ensure the safety of your personal information. Your data is stored securely, and access is restricted to authorized personnel only.
        </p>
        <h3 className="text-xl font-semibold mb-2">Third-Party Disclosure</h3>
        <p className="leading-relaxed">
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as necessary to fulfill your requests or comply with legal obligations.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
