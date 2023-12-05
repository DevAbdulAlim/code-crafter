import { ButtonType } from "./LinkButtonType";
import Link from "next/link";
import { BiSolidShow } from "react-icons/bi";

const ViewButton: React.FC<ButtonType> = ({
  to,
  children,
  disabled = false,
}) => {
  return (
    <Link
      href={to}
      className="bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300"
      scroll={false}
    >
      <div className="flex">
        <span className="text-2xl me-2">
          <BiSolidShow />
        </span>
        {children}
      </div>
    </Link>
  );
};

export default ViewButton;
