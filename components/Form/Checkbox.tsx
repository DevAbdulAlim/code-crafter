"use client";
import { ChangeEvent, useState } from "react";

interface CheckboxProps {
  label: string;
  onChange: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(isChecked);
  };

  return (
    <div className="mb-4">
      <label className="cursor-pointer flex justify-start items-center text-sm">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={handleChange}
          checked={isChecked}
          className="hidden"
        />
        {isChecked ? (
          <span className="inline-flex items-center justify-center w-5 h-5 p-1 text-white mr-2 bg-blue-500 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        ) : (
          <span className="inline-flex items-center justify-center w-5 h-5 p-1 text-white mr-2 bg-gray-300 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
