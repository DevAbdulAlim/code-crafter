const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-10">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">
            Coding Dreams Unleashed! ✨
          </h1>
          <p className="text-lg">
            Join me on this coding odyssey and let's build wonders together!
          </p>
          <button className="mt-6 bg-white text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white">
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
