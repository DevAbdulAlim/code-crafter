type TextInputType = {
    title:string;
    required?:boolean,
}
export default function TextInput({}) {
  return (
    <div className="mb-4">
    <label htmlFor="courseTitle" className="block text-gray-700 text-sm font-bold mb-2">
      Course Title
    </label>
    <input
      type="text"
      id="courseTitle"
      name="title"
      className="w-full p-2 border border-gray-300 rounded"
      required
    />
  </div>
  )
}
