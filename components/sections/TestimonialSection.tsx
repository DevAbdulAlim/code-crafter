import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Web Developer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "UX Designer",
    comment:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    position: "Product Manager",
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-4xl font-extrabold text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 transition-transform transform bg-white rounded-md shadow-md hover:scale-105"
            >
              <p className="mb-4 text-gray-700">{testimonial.comment}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={`https://i.pravatar.cc/150?img=${testimonial.id}`}
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
