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
    <main className="flex min-h-screen flex-col">
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
