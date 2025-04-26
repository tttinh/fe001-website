import { Button } from './ui/button';

const features = [
  {
    icon: '🔍',
    title: 'Find out what you need',
    description: 'We present you a proposal and discuss nitty-gritty like',
    backgroundColor: 'bg-[#F1EFFD]',
  },
  {
    icon: '⚙️',
    title: 'Work out the details',
    description: 'Communication protocols apart from engagement models',
    backgroundColor: 'bg-[#FFE7E7]',
  },
  {
    icon: '🚀',
    title: 'We get to work fast',
    description: 'Protocols apart from engage models, pricing billing',
    backgroundColor: 'bg-[#FFF3E4]',
  },
];

const FeatureSection = () => {
  return (
    <section className="container-center flex flex-col items-center gap-8 py-16">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">How can we help your business?</h2>
        <p className="text-gray-600">
          When you sell products, you build trust and increase reputation.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-6 text-center"
          >
            <div
              className={`flex-center h-24 w-24 rounded-full ${feature.backgroundColor}`}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="text-2xl font-medium">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <Button className="cursor-pointer rounded-full px-8 py-6 text-base">
        Become a Partner
      </Button>
    </section>
  );
};

export default FeatureSection;
