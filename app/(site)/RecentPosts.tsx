import { Button } from "@/components/ui/button";
import React from "react";
import {
  IoCalendarOutline,
  IoDocumentLockOutline,
  IoPersonOutline,
  IoTimeOutline,
} from "react-icons/io5";

// Assuming Post type definition
type Post = {
  title: string;
  category: string;
  content: string;
  imageUrl: string;
  date: string; // Add date property
  time: string; // Add time property
  user: string; // Add user property
};

// Function to format date
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Function to format time
// Function to format time
const formatTime = (timeString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Date(`2000-01-01T${timeString}`).toLocaleTimeString(
    undefined,
    options
  );
};

const posts: Post[] = [
  {
    title: "Mastering JavaScript for Web Development",
    category: "Web Development",
    content:
      "Learn the fundamentals of JavaScript and master its usage in web development...",
    imageUrl:
      "https://www.onemanwebdesign.com/wp-content/uploads/girl-on-headway-tutors-website.jpg.webp",
    date: "2024-02-15",
    time: "08:30:00",
    user: "John Doe",
  },
  {
    title: "Advanced React Techniques and Best Practices",
    category: "React Development",
    content:
      "Discover advanced techniques and best practices for building powerful React applications...",
    imageUrl:
      "https://static.wixstatic.com/media/11062b_c9033e5ead4c4760ab8e05e709d55a85~mv2.jpg/v1/fill/w_824,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_c9033e5ead4c4760ab8e05e709d55a85~mv2.jpg",
    date: "2024-02-16",
    time: "12:45:00",
    user: "Jane Smith",
  },
  {
    title: "Building Scalable APIs with Node.js and Express",
    category: "Node.js",
    content:
      "Learn how to build scalable and efficient APIs using Node.js and Express...",
    imageUrl:
      "https://img.freepik.com/free-photo/programming-background-concept_23-2150170137.jpg",
    date: "2024-02-17",
    time: "15:20:00",
    user: "Alex Johnson",
  },
];

const PostCard = ({ post }: { post: Post }) => (
  <div className="flex flex-col overflow-hidden bg-white rounded-lg ">
    <img
      src={post.imageUrl}
      alt={`Post ${post.title}`}
      className="object-cover w-full mb-4 h-72"
    />
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <IoCalendarOutline className="text-2xl text-blue-500" />
          <p className="text-gray-600">{formatDate(post.date)}</p>
        </div>
        <div className="flex items-center space-x-2">
          <IoTimeOutline className="text-2xl text-green-500" />
          <p className="text-gray-600">{formatTime(post.time)}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="mb-2 text-gray-600">{post.category}</p>
      <p className="text-gray-800">{post.content}</p>
    </div>

    {/* Additional Information with Border */}
    <div className="flex justify-between p-4 mt-auto border-t border-gray-300">
      <div className="flex items-center mb-2 space-x-2">
        <IoPersonOutline className="text-2xl text-purple-500" />
        <p className="text-gray-600">{post.user}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="link" className="text-blue-500">
          Read More
        </Button>
      </div>
    </div>
  </div>
);

const RecentPosts: React.FC = () => {
  return (
    <section className="px-3 py-12 bg-blue-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold">Recent Posts</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
