import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="px-4 bg-blue-100 py-28">
      <div className="justify-between mx-auto md:flex max-w-7xl">
        <div className="flex flex-col items-center justify-center mb-4 md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold">Coding Dreams Unleashed!</h1>
          <p className="text-lg">
            Join me on this coding odyssey and let's build wonders together!
          </p>
          <Button className="mt-4">Begin the Journey</Button>
        </div>
        <div className="text-right md:w-1/2">
          <img
            src="https://elements-cover-images-0.imgix.net/d91c6ca5-3c5e-411c-9185-57dfc4b58e5f?auto=compress%2Cformat&w=900&fit=max&s=4dadf78a6eeecc2bc4dc7127f1dada8d"
            alt="Your Alt Text"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
