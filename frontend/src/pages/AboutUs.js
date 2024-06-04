import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>
      <div className="space-y-16">
        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <img 
            src="https://media.istockphoto.com/id/1626847287/photo/a-group-of-happy-multiethnic-businesspeople-working-together-in-the-office.jpg?s=1024x1024&w=is&k=20&c=kiPRBs1gSy3SKz1SfEJ_-tyurdKcWzeQP36KRyBu-6Q="
            alt="Our Team" 
            className="w-full md:w-1/3 rounded-lg" 
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="leading-relaxed">
              We are a dedicated team of professionals committed to providing the best online shopping experience. Our team brings together expertise from various fields to deliver a seamless and enjoyable e-commerce experience for our customers.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <img 
            src="https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pc3Npb258ZW58MHx8fHwxNjU5NjY0Mzc3&ixlib=rb-1.2.1&q=80&w=400"
            alt="Our Mission" 
            className="w-full md:w-1/3 rounded-lg" 
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              Our mission is to offer high-quality products at competitive prices while ensuring outstanding customer service. We aim to be your go-to online store for all your shopping needs, providing a wide range of products and a user-friendly platform.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <img 
            src="https://media.istockphoto.com/id/173798658/photo/balance-scale-against-multi-colored-sky.jpg?s=1024x1024&w=is&k=20&c=jePf8Dxe7PXpCxm8UKX_AAtiYmaDEx4gEB_IpEob47A="
            alt="Our Values" 
            className="w-full md:w-1/3 rounded-lg" 
          />
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p className="leading-relaxed">
              Integrity, customer satisfaction, and innovation are at the core of our values. We believe in building long-term relationships with our customers by consistently delivering quality products and services that exceed their expectations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
