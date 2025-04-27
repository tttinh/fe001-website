import { Clock, Layers, Lightbulb, Settings } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: <Layers className="h-8 w-8 text-blue-600" />,
    title: 'Web Design',
    description: 'One for all and all for one, Muskehounds are always ready.',
    link: '#learn-more',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-amber-400" />,
    title: 'Ad-Creatives',
    description: 'Alphabet Village and the subline of her own road.',
    link: '#learn-more',
  },
  {
    icon: <Settings className="h-8 w-8 text-red-400" />,
    title: 'Automation',
    description: 'Little Blind Text should turn around and return.',
    link: '#learn-more',
  },
  {
    icon: <Clock className="h-8 w-8 text-cyan-400" />,
    title: 'Infographics',
    description: 'Nothing the copy said could convince her.',
    link: '#learn-more',
  },
];

const ServiceSection = () => {
  return (
    <section className="container-center flex-center w-full flex-col gap-6 py-16 md:flex-row md:py-24">
      <div className="flex w-fit flex-col gap-6 md:w-1/3">
        <h2 className="text-3xl font-bold md:w-4/5 md:text-4xl">
          Future of support with new shape
        </h2>

        <p className="text-lg text-gray-600 md:w-4/5">
          Discuss your goals, determine success metrics, identify problems
        </p>

        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
            </div>
            <span className="text-gray-600">UX design content strategy</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
            </div>
            <span className="text-gray-600">Development bring</span>
          </li>
        </ul>

        <Button className="w-fit px-8 py-6 text-base">Get started</Button>
      </div>

      <div className="grid gap-8 md:w-1/2 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="cursor-pointer space-y-4 rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <a
              href={service.link}
              className="text-blue-500 uppercase transition-colors hover:text-green-600"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
