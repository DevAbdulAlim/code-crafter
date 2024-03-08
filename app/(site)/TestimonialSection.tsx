import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Web Developer",
    comment:
      "CodeCrafter has been an invaluable resource in my journey as a web developer. The courses are comprehensive, up-to-date, and taught by industry experts. I've been able to expand my skillset significantly thanks to the quality content provided by CodeCrafter.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "UX Designer",
    comment:
      "I've always been impressed by the attention to detail and the clarity of instruction in CodeCrafter's courses. As a UX designer, staying current with the latest trends and techniques is crucial, and CodeCrafter helps me do just that. The platform is user-friendly, and the content is top-notch.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    position: "Product Manager",
    comment:
      "CodeCrafter has been instrumental in my career growth as a product manager. The courses cover a wide range of topics relevant to my role, from agile methodologies to product development strategies. I appreciate the practical insights shared by instructors, which I can apply directly to my work.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="px-3 py-16 ">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-4xl font-extrabold text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 transition-transform transform rounded-md bg-blue-50 hover:scale-105"
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
