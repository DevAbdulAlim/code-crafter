import React from "react";
import {
  FaUserEdit,
  FaShieldAlt,
  FaUsers,
  FaBell,
  FaUserTimes,
  FaCog,
  FaUserAltSlash,
  FaFileInvoiceDollar,
  FaCreditCard,
  FaBook,
} from "react-icons/fa";
import Link from "@/components/ui/link";
import { TbSocial } from "react-icons/tb";

const subscriptionLinks = [
  { icon: FaUsers, text: "My Subscriptions", to: "/user/subscriptions" },
  { icon: FaCreditCard, text: "Billing Info", to: "/user/billing" },
  { icon: FaCreditCard, text: "Payment", to: "/user/payment" },
  { icon: FaFileInvoiceDollar, text: "Invoice", to: "/user/invoice" },
  { icon: FaBook, text: "My Quiz Attempt", to: "/user/quiz" },
];

const accountSettingsLinks = [
  { icon: FaUserEdit, text: "Edit Profile", to: "/user/edit-profile" },
  { icon: FaShieldAlt, text: "Security", to: "/user/security" },
  { icon: FaUsers, text: "Social Profiles", to: "/user/social-profiles" },
  { icon: FaBell, text: "Notifications", to: "/user/notifications" },
  { icon: FaUserTimes, text: "Profile Privacy", to: "/user/profile-privacy" },
  { icon: FaUserAltSlash, text: "Delete Profile", to: "/user/delete-profile" },
  { icon: TbSocial, text: "Linked Accounts", to: "/user/linked-accounts" },
  { icon: FaCog, text: "Sign Out", to: "/user/sign-out" },
];

const SideNavbar: React.FC = () => {
  return (
    <div className="w-64 h-full mt-4 shadow-lg ">
      <div className="p-4 ">
        <h3 className="mb-4 font-bold text-gray-600 text-md">SUBSCRIPTION</h3>
        <div className="flex flex-col space-y-2">
          {subscriptionLinks.map((link, index) => (
            <Link className="justify-start" key={index} to={link.to}>
              <link.icon className="w-6 h-6 mr-2" />
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4 ">
        <h3 className="mb-4 font-bold text-gray-600 text-md">
          ACCOUNT SETTINGS
        </h3>
        <div className="flex flex-col space-y-2">
          {accountSettingsLinks.map((link, index) => (
            <Link className="justify-start" key={index} to={link.to}>
              <link.icon className="w-6 h-6 mr-2" />
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
