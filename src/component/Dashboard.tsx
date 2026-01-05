import About from "./About";
import Home from "./Home";
import Project from "./Project";
import SlideSection from "./SlideSection";
import Contact from "./Contact";
import Navbar from "./Navbar";
import bg from "../assets/HomeBackground.svg";
import useScreenSize from "../hooks/useScreenSize";

function Dashboard() {
  const {
    isMobile,
    isDesktop,
    isWide,
    isLowHeightLaptop,
  } = useScreenSize();

  const maxWidth = isMobile
    ? "w-full"
    : isWide
    ? "max-w-[1600px]"
    : isDesktop
    ? "max-w-[1400px]"
    : "max-w-[1200px]";

  const horizontalPadding = isMobile
    ? "px-4"
    : isWide
    ? "px-16"
    : isDesktop
    ? "px-12"
    : "px-6";

  const sectionSpacing =
    isLowHeightLaptop || isMobile ? "py-10" : isWide ? "py-20" : "py-16";

  const sectionWrapper =
    isMobile || isLowHeightLaptop
      ? "w-full rounded-none border-0"
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
      <Navbar />

      {/* HOME */}
      <SlideSection z={5}>
        <section
          className={`w-full ${
            isMobile || isLowHeightLaptop ? "min-h-fit" : "h-[81vh]"
          }`}
        >
          <Home />
        </section>
      </SlideSection>

      {/* CONTENT */}
      <div className={`relative mx-auto ${maxWidth} ${horizontalPadding}`}>
        <SlideSection z={10}>
          <div className={`${sectionWrapper} bg-white ${sectionSpacing}`}>
            <About />
          </div>
        </SlideSection>

        <SlideSection z={20}>
          <div className={`${sectionWrapper} bg-[#F78154] text-white ${sectionSpacing}`}>
            <Project />
          </div>
        </SlideSection>

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
