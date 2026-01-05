import About from "./About";
import Home from "./Home";
import Project from "./Project";
import SlideSection from "./SlideSection";
import Contact from "./Contact";
import Navbar from "./Navbar";
import bg from "../assets/HomeBackground.svg";
import useScreenSize from "../hooks/useScreenSize";

function Dashboard() {
  const { isMobile, isDesktop, isWide } = useScreenSize();

  // Max width for different screens
  const maxWidth = isMobile
    ? "w-full"
    : isWide
    ? "max-w-[1600px]"
    : isDesktop
    ? "max-w-[1400px]"
    : "max-w-[1200px]";

  // Horizontal padding for different screens
  const horizontalPadding = isMobile
    ? "px-4" // small padding on mobile
    : isWide
    ? "px-16"
    : isDesktop
    ? "px-12"
    : "px-6";

  // Vertical spacing for sections
  const sectionSpacing = isWide
    ? "py-20"
    : isDesktop
    ? "py-16"
    : "py-12";

  // Section wrapper styling
  const sectionWrapper = isMobile
    ? "w-full rounded-none border-0" // remove rounded and border on mobile
    : "w-full rounded-xl border";

  return (
    <div
      className="relative min-h-screen bg-gray-50"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* HOME */}
      <SlideSection z={5}>
        <section className={`${isMobile ? "min-h-[60vh]" : "h-[81vh]"} w-full`}>
          <Home />
        </section>
      </SlideSection>

      {/* CONTENT */}
      <div className={`relative mx-auto ${maxWidth} ${horizontalPadding}`}>
        {/* ABOUT */}
        <SlideSection z={10}>
          <div className={`${sectionWrapper} bg-white/90 ${sectionSpacing}`}>
            <About />
          </div>
        </SlideSection>

        {/* PROJECTS */}
        <SlideSection z={20}>
          <div className={`${sectionWrapper} bg-[#F78154] text-white ${sectionSpacing}`}>
            <Project />
          </div>
        </SlideSection>

        {/* CONTACT */}
        <SlideSection z={30}>
          <div className={`${sectionWrapper} bg-zinc-900 text-white ${sectionSpacing}`}>
            <Contact />
          </div>
        </SlideSection>
      </div>
    </div>
  );
}

export default Dashboard;
