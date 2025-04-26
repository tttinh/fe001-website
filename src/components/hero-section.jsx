import { MoveRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import heroImg from '@/assets/hero-image.png';
const HeroSection = () => {
  return (
    <section
      id="home"
      className="container-center grid items-center gap-12 pt-42 md:grid-cols-2"
    >
      {/* content */}
      <div className="space-y-4">
        {/* button */}
        <button className="flex-center group group cursor-pointer gap-1 rounded-full bg-gray-50 px-4 py-2 transition-colors hover:bg-gray-100">
          <span className="text-blue-600 transition-transform group-hover:scale-110">
            ★
          </span>
          <span className="text-sm">Jump start your growth</span>
        </button>

        {/* headlines */}
        <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
          We boost the growth for{' '}
          <span className="relative inline-block text-blue-600">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-200/60"></span>
          </span>{' '}
          Companies
          <span className="animate-pulse">⏰</span>
        </h1>

        {/* message */}
        <p className="max-w-xl text-lg text-gray-600 md:text-xl">
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </p>

        {/* email input */}
        <div className="flex max-w-md items-center gap-3">
          <Input
            type="email"
            placeholder="Email address"
            className="py-7 placeholder:text-gray-400 md:text-base"
          />
          <Button className="px-7! py-7">
            <MoveRight />
          </Button>
        </div>
      </div>

      {/* image */}
      <img
        src={heroImg}
        alt="hero image"
        className="transition-transform duration-300 hover:scale-105"
      />
    </section>
  );
};

export default HeroSection;
