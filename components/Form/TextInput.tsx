'use client'
type TextInputType = {
  title: string;
  value?: string;
  required?: boolean;
};

const TextInput: React.FC<TextInputType> = ({ title, value = '', required = true }) => {
  const formattedTitle = title.replace(/\s+/g, '');

  return (
    <div className="mb-4">
      <label htmlFor={formattedTitle} className="block text-gray-700 text-sm font-bold mb-2">
        {title}
      </label>
      <input
        type="text"
        id={formattedTitle}
        defaultValue={value}
        name={formattedTitle}
        className="w-full p-2 border border-gray-300 rounded"
        required={required}
        aria-label={formattedTitle} // Accessibility enhancement
      />
    </div>
  );
};

export default TextInput;
