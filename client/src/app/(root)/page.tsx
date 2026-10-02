import Hero from "@/components/root/Hero";
import EventSection from "@/components/root/EventSection";
import TeamSection from "@/components/root/TeamSection";
import HighlightSection from "@/components/root/HighlightSection";
import LenisProvider from "@/components/LenisProvider";

const Rootpage = () => {
  return (
    <>
      <LenisProvider>
        <TeamSection />
        {/* <Hero /> */}
        {/* <EventSection /> */}
        {/* <HighlightSection /> */}
      </LenisProvider>
    </>
  );
};

export default Rootpage;
