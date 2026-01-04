import { motion } from "framer-motion";
import character from "../assets/HomeCharacter.png";

/* Variants */
// const containerVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       when: "beforeChildren",
//       staggerChildren: 0.15,
//     },
//   },
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.96 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

function Home() {
  return (
    <motion.section
      
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative "
    >
      {/* MASSIVE Background Text */}
      <div
        className="
          absolute inset-0
            h-screen w-screen 
            text-9xl
          pointer-events-none
          z-0
        "
      >
        <h1
          className="
            
            font-stretch-200%
            tracking-tight
            leading-none
            text-zinc-900/40
            
          "
        >
          Aaditya
          Mohan
        </h1>

       
      </div>

      {/* Foreground Hero Image */}
      <div className="relative z-10 flex justify-center">
        <motion.img
          src={character}
          alt="Developer illustration"
         
          className="
            w-full
            max-w-3xl
            object-contain
          "
        />
      </div>

      {/* Spacer */}
      <div className="" />
    </motion.section>
  );
}

export default Home;
