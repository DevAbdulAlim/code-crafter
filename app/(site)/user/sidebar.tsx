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

const SideNavbar: React.FC = () => {
  return (
    <div className="w-64 h-full mt-4 shadow-lg ">
      <div className="p-4 ">
        <h1 className="mb-4 text-lg font-bold">SUBSCRIPTION</h1>
        <div className="flex flex-col space-y-2">
          <Link to="/user/subscriptions">
            <FaUsers className="w-6 h-6 mr-2" />
            My Subscriptions
          </Link>
          <Link to="/user/billing">
            <FaCreditCard className="w-6 h-6 mr-2" />
            Billing Info
          </Link>
          <Link to="/user/payment">
            <FaCreditCard className="w-6 h-6 mr-2" />
            Payment
          </Link>
          <Link to="/user/invoice">
            <FaFileInvoiceDollar className="w-6 h-6 mr-2" />
            Invoice
          </Link>
          <Link to="/user/quiz">
            <FaBook className="w-6 h-6 mr-2" />
            My Quiz Attempt
          </Link>
        </div>
      </div>
      <div className="p-4 ">
        <h1 className="mb-4 text-lg font-bold">ACCOUNT SETTINGS</h1>
        <div className="flex flex-col space-y-2">
          <Link to="/edit-profile">
            <FaUserEdit className="w-6 h-6 mr-2" />
            Edit Profile
          </Link>
          <Link to="/security">
            <FaShieldAlt className="w-6 h-6 mr-2" />
            Security
          </Link>
          <Link to="/social-profiles">
            <FaUsers className="w-6 h-6 mr-2" />
            Social Profiles
          </Link>
          <Link to="/notifications">
            <FaBell className="w-6 h-6 mr-2" />
            Notifications
          </Link>
          <Link to="/profile-privacy">
            <FaUserTimes className="w-6 h-6 mr-2" />
            Profile Privacy
          </Link>
          <Link to="/delete-profile">
            <FaUserAltSlash className="w-6 h-6 mr-2" />
            Delete Profile
          </Link>
          <Link to="/linked-accounts">
            <FaUserAltSlash className="w-6 h-6 mr-2" />
            Linked Accounts
          </Link>
          <Link to="/sign-out">
            <FaCog className="w-6 h-6 mr-2" />
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
