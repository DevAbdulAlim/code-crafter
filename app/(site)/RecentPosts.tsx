import { Button } from "@/components/ui/button";
import React from "react";
import {
  IoCalendarOutline,
  IoPersonOutline,
  IoTimeOutline,
} from "react-icons/io5";

type Post = {
  title: string;
  category: string;
  content: string;
  imageUrl: string;
  date: string;
  time: string;
  user: string;
};

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

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
  <div className="relative flex flex-col overflow-hidden bg-white shadow-md rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
    {/* Image Section */}
    <div className="relative h-64">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <p className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
        {post.category}
      </p>
    </div>

    {/* Content Section */}
    <div className="flex-grow p-6">
      <div className="flex justify-between text-sm text-gray-500 mb-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
            <IoCalendarOutline className="text-blue-600 text-lg" />
          </div>
          <p>{formatDate(post.date)}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
            <IoTimeOutline className="text-green-600 text-lg" />
          </div>
          <p>{formatTime(post.time)}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
      <p className="mt-2 text-gray-600">{post.content}</p>
    </div>

    {/* Footer Section */}
    <div className="flex justify-between items-center p-4 border-t bg-blue-50">
      <div className="flex items-center space-x-2 text-gray-600">
        <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
          <IoPersonOutline className="text-purple-600 text-lg" />
        </div>
        <span>{post.user}</span>
      </div>
      <Button
        variant="default"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Read More
      </Button>
    </div>
  </div>
);

const RecentPosts: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      {/* Section Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Recent Posts</h2>
        <p className="text-lg text-gray-600">
          Stay updated with our latest tutorials, tips, and industry insights.
        </p>
      </div>
      {/* Posts Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  </section>
);

export default RecentPosts;
