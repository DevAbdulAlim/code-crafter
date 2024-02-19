const HeroSection: React.FC = () => {
  return (
    <div className="py-20 text-white bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500">
      <div className="flex justify-between mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="mb-4 text-4xl font-bold">
            Coding Dreams Unleashed! ✨
          </h1>
          <p className="text-lg">
            Join me on this coding odyssey and let's build wonders together!
          </p>
          <button className="px-4 py-2 mt-6 text-blue-500 bg-white rounded-full hover:bg-blue-500 hover:text-white">
            Begin the Journey
          </button>
        </div>
        <div className="w-1/2 text-right">
          <img
            src="https://img.freepik.com/free-vector/woman-working-new-app_23-2148682102.jpg"
            alt="Your Alt Text"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
