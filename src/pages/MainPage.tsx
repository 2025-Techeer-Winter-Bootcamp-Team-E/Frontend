import AISearchSection from '@/components/MainPage/AISearchSection';
import CTASection from '@/components/MainPage/CTASection';
import FeatureGrid from '@/components/MainPage/FeatureGrid';
import HeroSection from '@/components/MainPage/HeroSection';
import TimerSection from '@/components/MainPage/TimerSection';

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
