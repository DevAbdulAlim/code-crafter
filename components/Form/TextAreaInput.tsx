type TextInputType = {
    title: string;
    required?: boolean;
  };

const TextAreaInput:React.FC<TextInputType> = ({title, required = true}) => {
    const formattedTitle = title.replace(/\s+/g, '');
  return (
    <div className="mb-4">
          <label htmlFor={formattedTitle} className="block text-gray-700 text-sm font-bold mb-2">
            {title}
          </label>
          <textarea
            id={formattedTitle}
            name={formattedTitle}
            className="w-full p-2 border border-gray-300 rounded"
            required={required}
          />
        </div>
  )
}

export default TextAreaInput