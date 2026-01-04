import About from "./About";
import Home from "./Home";
import Project from "./Project";
import SlideSection from "./SlideSection";
import bg from "../assets/HomeBackground.svg";
import Contact from "./Contact"
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div
      className="min-h-[300vh] bg-gray-50"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="fixed flex justify-center w-full"><Navbar/></div>
      {/* Home stays in normal flow */}
        <SlideSection z = {5}>
          
          <Home/>
        </SlideSection>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Slides over Home */}
        <SlideSection z={10}>
          <div className="bg-white/90 border rounded-xl px-4 sm:px-6 lg:px-8 py-6">
             <About />
          </div>
         
        </SlideSection>

        {/* Slides over About */}
        <SlideSection z={20}>
          <div className=" bg-[#F78154]   border rounded-xl px-10 text-white py-10">
            <Project />
          </div>
          
        </SlideSection>
        <SlideSection z={20}>
          <div className="bg-zinc-900  border rounded-xl px-10 text-white py-10">
            <Contact />
          </div>
          
        </SlideSection>
        
      </div>
      
    </div>
  );
}

export default Dashboard;
