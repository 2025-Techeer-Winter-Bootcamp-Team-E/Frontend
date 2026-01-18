import AISearchSection from '@/components/mainPage/AISearchSection';
import CTASection from '@/components/mainPage/CTASection';
import FeatureGrid from '@/components/mainPage/FeatureGrid';
import HeroSection from '@/components/mainPage/HeroSection';
import TimerSection from '@/components/mainPage/TimerSection';

const MainPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AISearchSection />
      <TimerSection />
      <FeatureGrid />
      <CTASection />
    </>
  );
};

export default MainPage;
