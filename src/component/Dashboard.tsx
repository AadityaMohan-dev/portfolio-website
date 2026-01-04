import About from "./About";
import Home from "./Home";
import Project from "./Project";
import SlideSection from "./SlideSection";
import Contact from "./Contact";
import Navbar from "./Navbar";
import bg from "../assets/HomeBackground.svg";

function Dashboard() {
  return (
    <div
      className="relative min-h-[300vh] bg-gray-50"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* FIXED NAVBAR (DO NOT WRAP IN EXTRA DIVS) */}
      <Navbar />

      {/* HOME (BASE LAYER) */}
      <SlideSection z={5}>
        <Home />
      </SlideSection>

      {/* SLIDING CONTENT */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ABOUT */}
        <SlideSection z={10}>
          <div className="rounded-xl border bg-white/90 px-4 py-6 sm:px-6 lg:px-8">
            <About />
          </div>
        </SlideSection>

        {/* PROJECTS */}
        <SlideSection z={20}>
          <div className="rounded-xl border bg-[#F78154] px-4 py-8 text-white sm:px-6 lg:px-10">
            <Project />
          </div>
        </SlideSection>

        {/* CONTACT */}
        <SlideSection z={30}>
          <div className="rounded-xl border bg-zinc-900 px-4 py-10 text-white sm:px-6 lg:px-10">
            <Contact />
          </div>
        </SlideSection>
      </div>
    </div>
  );
}

export default Dashboard;
