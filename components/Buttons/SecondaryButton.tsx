import { ButtonType } from "./ButtonType";

const SecondaryButton: React.FC<ButtonType> = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded focus:outline-none"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
