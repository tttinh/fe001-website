import FeatureSection from './components/ui/feature-section';
import Footer from './components/ui/footer';
import Header from './components/ui/header';
import HeroSection from './components/ui/hero-section';
import LogoSection from './components/ui/logo-section';
import MonitorSection from './components/ui/monitor-section';
import NewsletterSection from './components/ui/newsletter-section';
import PricingSection from './components/ui/pricing-section';
import PurposeSection from './components/ui/purpose-section';
import ScheduleSection from './components/ui/schedule-section';
import ServiceSection from './components/ui/service-section';
import TestimonialSection from './components/ui/testimonial-section';

const App = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
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
