import slack from '@/assets/slack.png';
import amazon from '@/assets/amazon.png';
import woocommerce from '@/assets/woocommerce.png';
import meundies from '@/assets/meundies.png';
import sitepoint from '@/assets/sitepoint.png';

const logos = [slack, amazon, woocommerce, meundies, sitepoint];

const LogoSection = () => {
  return (
    <section className="container-center py-16">
      <div className="flex w-full flex-col items-start gap-6 overflow-hidden sm:flex-row sm:items-center">
        {/* text */}
        <div className="z-10 w-xs shrink-0 border-l-4 border-blue-400 bg-white px-6 py-2 text-xl font-semibold text-gray-600 sm:text-base">
          Proud partner at <br /> Hubspot & Segment
        </div>

        {/* <div className="z-10 mb-8 w-[300px] shrink-0 border-l-4 border-blue-500 bg-white px-8 py-2 text-xl font-semibold text-gray-600 sm:mb-0 sm:text-left sm:text-base">
        Proud partner at <br /> Hubspot & Segment
      </div> */}

        {/* logos */}
        <div className="animate-marquee flex gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-8 w-36 object-contain opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-8 w-36 object-contain opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
