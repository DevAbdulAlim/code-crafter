import { MdEditSquare } from "react-icons/md";
import { ButtonType } from "./LinkButtonType";
import Link from "next/link";

const EditButton: React.FC<ButtonType> = ({ to, children, disabled = false }) => {
  return (
    <Link
      href={to}
      className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
    >
    <div className="flex">
        <span className="text-2xl me-2">
          <MdEditSquare />
        </span>
        {children}
      </div>
    </Link>
  );
};

export default EditButton;
