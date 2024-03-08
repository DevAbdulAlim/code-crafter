import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-3 py-8 text-gray-200 bg-blue-950">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 - About Us */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">About Us</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
          <ul className="text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Us */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
          <p className="text-sm">1234 Main Street, Cityville</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +880 1890977793</p>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-4 mt-8 text-center border-t border-gray-700">
        <p className="text-sm text-gray-400">
          &copy; 2023 CodeCrafter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
