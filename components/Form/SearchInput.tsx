'use client'
import React, { ChangeEvent } from 'react';

interface TextInputType {
  title: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

const SearchInput: React.FC<TextInputType> = ({ title, value = '', onChange, required = true }) => {
  const formattedTitle = title.replace(/\s+/g, '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      id={formattedTitle}
      defaultValue={value}
      name={formattedTitle}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded"
      required={required}
      placeholder={title}
      aria-label={formattedTitle} // Accessibility enhancement
    />
  );
};

export default SearchInput;
