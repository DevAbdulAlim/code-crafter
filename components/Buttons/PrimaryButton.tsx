import { ButtonType } from "./ButtonType";

const PrimaryButton: React.FC<ButtonType> = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
