import { Card, CardContent } from '@/components/ui/card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    star: 3,
    name: 'Robin Ayala Doe',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
  },
  {
    id: 2,
    star: 5,
    name: 'John De marli',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  },
  {
    id: 3,
    star: 4,
    name: 'Rowhan Smith',
    image: 'https://randomuser.me/api/portraits/men/90.jpg',
    text: 'When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.',
  },
  {
    id: 4,
    star: 5,
    name: 'Sarah Johnson',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    text: 'The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.',
  },
  {
    id: 5,
    star: 4,
    name: 'Michael Chen',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    star: 5,
    name: 'Emma Wilson',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="container-center flex-center py-16 md:py-24">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex-center aspect-square flex-col p-6">
                    <div className="h-24 w-24 overflow-hidden rounded-full">
                      <img
                        src={item.image}
                        alt={`avatar ${item.id}`}
                        className="h-auto w-full"
                      />
                    </div>

                    <div className="mb-2 flex justify-center">
                      {[...Array(item.star)].map((_, starIndex) => (
                        <span key={starIndex} className="text-blue-600">
                          ★
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-center text-gray-600">{item.text}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="h-10 w-10" />
        <CarouselNext className="h-10 w-10" />
      </Carousel>
    </section>
  );
};

export default TestimonialSection;
