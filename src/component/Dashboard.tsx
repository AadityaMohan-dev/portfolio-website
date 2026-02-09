import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import About from "./About";
import Home from "./Home";
import Project from "./Project";
import SlideSection from "./SlideSection";
import Contact from "./Contact";
import Navbar from "./Navbar";
import bg from "../assets/HomeBackground.svg";
import useScreenSize from "../hooks/useScreenSize";

function Dashboard() {
  const { isMobile, isDesktop, isWide, isLowHeightLaptop } = useScreenSize();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ─── MOBILE (no sticky overlay, normal scroll) ───
  if (isMobile) {
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

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F78154] to-zinc-900 origin-left z-[101]"
          style={{ scaleX }}
        />

        <section className="min-h-screen flex items-center justify-center px-4">
          <Home />
        </section>

        <section className="bg-zinc-100">
          <div className="w-full px-4 py-16">
            <About />
          </div>
        </section>

        <section className="bg-[#F78154] text-white">
          <div className="w-full px-4 py-16">
            <Project />
          </div>
        </section>

        <section className="bg-zinc-900 text-white">
          <div className="w-full px-4 py-16">
            <Contact />
          </div>
        </section>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 text-white shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    );
  }

  // ─── DESKTOP ───
  const maxWidth = isWide
    ? "max-w-[1600px]"
    : isDesktop
    ? "max-w-[1400px]"
    : "max-w-[1200px]";

  const horizontalPadding = isWide ? "px-16" : isDesktop ? "px-12" : "px-6";

  const sectionSpacing = isLowHeightLaptop
    ? "py-10"
    : isWide
    ? "py-20"
    : "py-16";

  const sectionWrapper = isLowHeightLaptop
    ? "w-full rounded-none border-0"
    : "w-full rounded-xl border-2";

  return (
    <div
      className="relative bg-gray-50"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F78154] to-zinc-900 origin-left z-[101]"
        style={{ scaleX }}
      />

      {/* HOME */}
      <SlideSection z={5}>
        <section className="w-full min-h-screen flex items-center justify-center">
          <Home />
        </section>
      </SlideSection>

      {/* CONTENT */}
      <div className={`relative mx-auto ${maxWidth} ${horizontalPadding}`}>
        {/* ABOUT */}
        <SlideSection z={10}>
          <div
            className={`${sectionWrapper} bg-zinc-100 ${sectionSpacing} shadow-lg`}
          >
            <About />
          </div>
        </SlideSection>

        {/* PROJECT */}
        <SlideSection z={20}>
          <div
            className={`${sectionWrapper} bg-[#F78154] text-white ${sectionSpacing} shadow-lg`}
          >
            <Project />
          </div>
        </SlideSection>

        {/* CONTACT */}
        <SlideSection z={30}>
          <div
            className={`${sectionWrapper} bg-zinc-900 text-white ${sectionSpacing} shadow-lg`}
          >
            <Contact />
          </div>
        </SlideSection>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-zinc-900 text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/10"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </div>
  );
}

export default Dashboard;