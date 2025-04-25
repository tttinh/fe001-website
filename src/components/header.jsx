import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Container from './ui/container';
import { cn } from '@/lib/utils';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#service', label: 'Our Service' },
  { href: '#testimonials', label: 'Testimonials' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-sm">
      <Container className="flex-between h-16 text-sm">
        <div className="flex-center cursor-pointer gap-1">
          <div className="h-4 w-4 rounded-full bg-blue-500 opacity-75 transition-opacity hover:opacity-100"></div>
          <div className="-ml-2 h-4 w-4 rounded-full bg-red-500 opacity-75 transition-opacity hover:opacity-100"></div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* desktop */}
        <nav className="md:flex-between hidden gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={cn(
                'relative after:absolute after:bottom-0 after:left-0',
                'after:h-0.5 after:w-0 after:bg-blue-600',
                'after:transition-all hover:after:w-full',
                `${
                  link.href === activeLink
                    ? 'text-blue-600 after:w-full'
                    : 'text-gray-600 hover:text-gray-900'
                }`,
              )}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button className={'hidden px-6 md:block'}>Get in touch</Button>
      </Container>

      {isMenuOpen && (
        <Container className="text-sm md:hidden">
          <nav className="flex w-full flex-col gap-2 py-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`py-2 text-sm ${link.href === activeLink ? 'text-blue-500' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}

            <Button>Get in touch</Button>
          </nav>
        </Container>
      )}
    </header>
  );
};

export default Header;
