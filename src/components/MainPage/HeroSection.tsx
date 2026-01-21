import MainSearchBar from '@/components/mainPage/MainSearchBar';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#F7F8FA] via-[#F2F4F7] to-white py-40">
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <MainSearchBar />
        <p className="mt-12 text-lg text-gray-500">
          AI가 설계하는 새로운 쇼핑 방식AI가 설계하는 새로운 쇼핑 방식AI가 설계하는 새로운 쇼핑
          방식AI가 설계하는 새로운 쇼핑 방식AI가 설계하는 새로운 쇼핑 방식
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
