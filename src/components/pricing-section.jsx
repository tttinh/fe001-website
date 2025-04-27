import { Button } from './ui/button';

const PricingSection = () => {
  return (
    <section className="container-center flex-center flex-col gap-4 py-16">
      <h2 className="text-3xl font-bold md:text-4xl">Pricing</h2>
      <div className="flex-center w-full flex-col gap-12 py-12 md:flex-row">
        <div className="w-max-md h-40 w-full space-y-4 rounded-md p-6 shadow-xl">
          <p className="text-xl text-gray-600">Starter</p>
          <h3 className="text-3xl font-bold">$80/mo</h3>
        </div>

        <div className="w-max-md h-40 w-full space-y-4 rounded-md p-6 shadow-xl">
          <p className="text-xl text-gray-600">Business</p>
          <h3 className="text-3xl font-bold">$150/mo</h3>
        </div>
      </div>

      <p className="text-xl text-gray-600">Ready to get started?</p>
      <Button className="px-6 py-6 text-base">Get Started</Button>
    </section>
  );
};

export default PricingSection;
