import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
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

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-5">Quick Links</h2>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/courses", label: "Courses" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:underline hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-5">
              Popular Courses
            </h2>
            <ul className="space-y-3 text-sm">
              {[
                {
                  href: "/courses/full-stack",
                  label: "Full Stack Web Development",
                },
                {
                  href: "/courses/data-science",
                  label: "Data Science & Machine Learning",
                },
                { href: "/courses/python", label: "Python for Beginners" },
                { href: "/courses/ui-ux", label: "UI/UX Design Essentials" },
                { href: "/courses/javascript", label: "JavaScript Mastery" },
              ].map((course) => (
                <li key={course.href}>
                  <Link
                    href={course.href}
                    className="hover:underline hover:text-blue-400"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
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

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            {[FaFacebook, FaTwitter, FaLinkedin, FaYoutube].map(
              (Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-blue-800 hover:bg-blue-700 rounded-full transition duration-300"
                  aria-label={`Social Media ${index}`}
                >
                  <Icon size={24} className="text-white" />
                </Link>
              )
            )}
          </div>

          {/* Newsletter Subscription */}
          <form className="w-full max-w-lg">
            <div className="flex items-center space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full text-gray-800"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2">
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        {/* Footer Text */}
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
