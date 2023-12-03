import { ButtonType } from "./ButtonType";

const OutlineButton: React.FC<ButtonType> = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded focus:outline-none"
    >
      {children}
    </button>
  );
};

export default OutlineButton;
