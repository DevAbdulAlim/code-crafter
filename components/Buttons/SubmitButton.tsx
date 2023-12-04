'use client'
import { useFormStatus} from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  const buttonColor = pending ? "bg-gray-400" : "bg-blue-500";
  const hoverColor = pending ? "hover:bg-gray-400" : "hover:bg-blue-600";

  return (
    <button
      type="submit"
      disabled={pending}
      aria-label="submit"
      className={`text-white w-32 py-2 px-4 rounded focus:outline-none ${buttonColor} ${hoverColor}`}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default SubmitButton;
