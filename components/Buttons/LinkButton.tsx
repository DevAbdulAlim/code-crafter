import { ButtonType } from "./LinkButtonType";
import Link from "next/link";

const LinkButton: React.FC<ButtonType> = ({ to, children, disabled = false }) => {
  return (
    <Link
      href={to}
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
