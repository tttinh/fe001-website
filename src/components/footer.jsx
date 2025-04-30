import facebook from '@/assets/facebook.svg';
import linkedin from '@/assets/linkedin.svg';
import twitter from '@/assets/twitter.svg';

const links = [
  {
    title: 'Company',
    items: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Get Help',
    items: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
  },
  {
    title: 'Support',
    items: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <section className="container-center">
        {/* top section */}
        <div className="flex flex-col justify-between gap-8 pb-12 lg:flex-row">
          {/* The next design section*/}
          <div className="w-full space-y-4 lg:max-w-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="h-4 w-4 rounded-full bg-blue-600 opacity-75"></span>
                <span className="-ml-2 h-4 w-4 rounded-full bg-red-500"></span>
              </div>
              <h3 className="text-xl">The Next Design</h3>
            </div>

            <p className="text-gray-600">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300 transition-colors hover:bg-gray-200"
              >
                <img
                  className="hover:text-blue-600"
                  src={facebook}
                  alt="facebook icon"
                />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300 transition-colors hover:bg-gray-200"
              >
                <img
                  className="hover:text-blue-600"
                  src={twitter}
                  alt="twitter icon"
                />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300 transition-colors hover:bg-gray-200"
              >
                <img
                  className="hover:text-blue-600"
                  src={linkedin}
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>

          {/* The links section */}
          <div className="grid w-full max-w-3xl grid-cols-2 gap-8 md:grid-cols-4">
            {links.map((link, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg">{link.title}</h3>
                <ul className="space-y-2">
                  {link.items.map((item, lindex) => (
                    <li key={lindex}>
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom section */}
        <div className="flex-between flex-col border-t border-t-gray-200 py-8 md:flex-row">
          <p className="text-center text-sm text-gray-600">
            Copyright © 2025 codetutorbd.com
          </p>
          <p className="text-center text-sm text-gray-600">
            Created by Tinh following Md Al Mamun tutorial
          </p>
        </div>
      </section>
    </section>
  );
};

export default Footer;
