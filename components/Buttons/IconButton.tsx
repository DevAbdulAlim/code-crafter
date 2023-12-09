interface IconButtonProps {
  title?: string;
  children: React.ReactNode;
  onClick?: () => void; // Add this line for click functionality
}

const IconButton: React.FC<IconButtonProps> = ({
  title = "",
  children,
  onClick,
}) => {
  return (
    <button
      className="p-2 bg-red-100 text-red-500 hover:bg-red-500 transition-all duration-300 ease-in-out hover:text-white  m-2 rounded-full"
      onClick={onClick} // Pass onClick to the button
    >
      <span>{children}</span>
      <span>{title}</span>
    </button>
  );
};

export default IconButton;
