import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen p-8 ">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg">Empowering Innovation, Transforming Ideas</p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, tellus non aliquam eleifend,
            turpis ex molestie felis, eu venenatis urna quam sit amet odio.
          </p>
          <p className="text-lg">
            Proin accumsan, justo vitae varius elementum, dolor lorem convallis elit, in facilisis nulla metus vel ligula.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to inspire and empower individuals and businesses through cutting-edge technology and innovative solutions.
          </p>
          <p className="text-lg">
            We are committed to delivering excellence, fostering creativity, and building lasting partnerships with our clients.
          </p>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg">
            Meet the dedicated individuals behind our success. Each team member brings a unique set of skills and expertise to the table,
            contributing to our collaborative and dynamic work environment.
          </p>
          {/* Add individual team member sections with photos, names, and roles */}
        </div>

        {/* Connect with Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <p className="text-lg">
            Follow us on social media to stay updated on the latest news, events, and technology trends.
          </p>
          <div className="flex mt-4">
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg">Ready to embark on a journey of innovation with us?</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full mt-4 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
            Get in Touch
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
