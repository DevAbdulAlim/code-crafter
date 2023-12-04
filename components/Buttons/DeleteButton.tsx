'use client'
import {MdDelete} from 'react-icons/md'

interface DeleteButtonProps {
id: string;
  handleDelete: any;
  disabled?: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, handleDelete, disabled = false }) => {
  const handleClick = () => {
    handleDelete('delete', id, );
  };

  return (
    <button
    onClick={handleClick}
    className={`bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none transition-colors duration-300 ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
    disabled={disabled}
  >
    <div className="flex">
        <span className="text-2xl me-2">
          <MdDelete />
        </span>
       Delete
      </div>
  </button>
  );
};

export default DeleteButton;
