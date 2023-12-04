// 'use client'
// import { createCategory } from '@/app/(dashboard)/admin/courses/new/action';
// import { useFormState } from 'react-dom';
// import SubmitButton from '../Buttons/SubmitButton';
// import { useRef } from 'react';
// import { toast } from 'react-toastify';



// const CategoryForm = () => {
//   const [state, formAction] = useFormState(createCategory, null);
//   const ref = useRef<HTMLFormElement>(null);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);

//     try {
//       await formAction(formData);
//       ref.current?.reset();
//       toast.success('Category added successfully!');
//     } catch (error) {
//       toast.error('Failed to add category. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-semibold mb-4">Add New Category</h2>

//       <form ref={ref} onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="categoryName" className="block text-gray-700 text-sm font-bold mb-2">
//             Category Name
//           </label>
//           <input
//             type="text"
//             id="categoryName"
//             name="name"
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="categoryDescription" className="block text-gray-700 text-sm font-bold mb-2">
//             Category Description
//           </label>
//           <textarea
//             id="categoryDescription"
//             name="description"
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         {/* If you want to include parent category */}
//         <div className="mb-4">
//           <label htmlFor="parentCategory" className="block text-gray-700 text-sm font-bold mb-2">
//             Parent Category
//           </label>
//           <select
//             id="parentCategory"
//             name="parentId"
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             {/* Options for parent categories go here */}
//           </select>
//         </div>
//         <SubmitButton />
//       </form>
//     </div>
//   );
// };

// export default CategoryForm;
