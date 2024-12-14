import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About CodeCrafter */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-5">
              About CodeCrafter
            </h2>
            <p className="text-sm leading-relaxed">
              <span className="text-blue-400 font-semibold">CodeCrafter</span>{" "}
              is your ultimate platform for mastering coding skills. From
              beginner-friendly courses to advanced tutorials, we empower
              learners to excel in web development, data science, AI, and more.
            </p>
            <p className="mt-4">
              <Link
                href="/about"
                className="text-blue-400 hover:underline hover:text-blue-500 transition duration-200"
              >
                Learn More About Us &rarr;
              </Link>
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-5">Quick Links</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:underline hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:underline hover:text-blue-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:underline hover:text-blue-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Popular Courses */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-5">
              Popular Courses
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/courses/full-stack"
                  className="hover:underline hover:text-blue-400"
                >
                  Full Stack Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-science"
                  className="hover:underline hover:text-blue-400"
                >
                  Data Science & Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/python"
                  className="hover:underline hover:text-blue-400"
                >
                  Python for Beginners
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/ui-ux"
                  className="hover:underline hover:text-blue-400"
                >
                  UI/UX Design Essentials
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/javascript"
                  className="hover:underline hover:text-blue-400"
                >
                  JavaScript Mastery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-5">Contact Us</h2>
            <p className="text-sm mb-3">
              <span className="font-semibold">Address:</span> 1234 Tech Street,
              Cityville
            </p>
            <p className="text-sm mb-3">
              <span className="font-semibold">Email:</span>{" "}
              <Link
                href="mailto:support@codecrafter.com"
                className="hover:underline text-blue-400"
              >
                support@codecrafter.com
              </Link>
            </p>
            <p className="text-sm">
              <span className="font-semibold">Phone:</span>{" "}
              <Link
                href="tel:+8801890977793"
                className="hover:underline text-blue-400"
              >
                +880 1890977793
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-10 bg-gray-700" />

        {/* Social Media and Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6 lg:mb-0">
            <Link
              href="#"
              className="hover:text-blue-400 transition duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 transition duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 transition duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 transition duration-200"
              aria-label="YouTube"
            >
              <FaYoutube size={30} />
            </Link>
          </div>

          {/* Newsletter Signup */}
          <form className="w-full max-w-lg">
            <div className="flex items-center space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2">
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-400">CodeCrafter</span>.
            Transforming learners into creators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
