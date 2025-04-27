import { ArrowRight, MoveRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const NewsletterSection = () => {
  return (
    <section className="container-center flex justify-center py-16 md:py-24">
      <div className="w-full rounded-xl bg-blue-600 px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto flex w-fit flex-col items-center justify-between gap-8 md:gap-12 lg:w-auto lg:flex-row">
          <div className="space-y-4 text-center text-white md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl">
              Subcribe newsletter
            </h2>
            <p className="text-sm sm:text-base">
              Best cooks and best delivery guys all at your service. Hot tasty
              food
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-16 bg-white text-base placeholder:text-gray-400 focus:ring-green-500! sm:rounded-r-none lg:w-80"
              />
              <Button className="h-16 cursor-pointer bg-green-500 py-7 text-base hover:bg-green-600 sm:w-32 sm:rounded-l-none">
                Discover
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
