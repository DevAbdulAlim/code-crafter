import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center py-16 px-6">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Empower Your <span className="text-yellow-400">Coding Journey</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Unlock your potential with tailored courses, expert mentors, and a
            supportive community to help you achieve your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg shadow-md hover:bg-yellow-500">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 border-gray-300 text-gray-500 hover:bg-gray-200 hover:text-blue-900 rounded-lg"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative w-[300px] h-[400px]">
            {/* Main Mockup Card */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg transform rotate-2"></div>
            <div className="absolute inset-0 w-full h-full bg-white rounded-xl shadow-lg transform -rotate-2">
              <img
                src="/img/hero.jpeg"
                alt="Mockup"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl"></div> */}
    </section>
  );
};

export default HeroSection;
