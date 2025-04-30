import FeatureSection from './components/feature-section';
import Footer from './components/footer';
import Header from './components/header';
import HeroSection from './components/hero-section';
import LogoSection from './components/logo-section';
import MonitorSection from './components/monitor-section';
import NewsletterSection from './components/newsletter-section';
import PricingSection from './components/pricing-section';
import PurposeSection from './components/purpose-section';
import ScheduleSection from './components/schedule-section';
import ServiceSection from './components/service-section';
import TestimonialSection from './components/testimonial-section';

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-[80px]"></div>

      <Header />
      <HeroSection />
      <LogoSection />
      <PurposeSection />
      <FeatureSection />
      <ScheduleSection />
      <MonitorSection />
      <PricingSection />
      <ServiceSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default App;
