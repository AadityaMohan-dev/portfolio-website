import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket } from "lucide-react";
import character from "../assets/HomeCharacter.png";
import useIsMobile from "../hooks/useIsMobile";

function Home() {
  const isMobile = useIsMobile();

  const name = ["A", "A", "D", "I", "T", "Y", "A"];
  const lastName = ["M", "O", "H", "A", "N"];

  const NameBlock = () => (
    <div className="flex flex-col items-center justify-center pointer-events-none select-none">
      {/* AADITYA */}
      <div className="overflow-hidden relative">
        <motion.div className="flex">
          {name.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: i * 0.04,
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="
                font-black
                tracking-[-0.05em]
                text-zinc-700
                text-[20vw]
                leading-[0.8]
              "
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* MOHAN */}
      <div className="overflow-hidden -mt-[6vw] relative">
        <motion.div className="flex">
          {lastName.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.3 + i * 0.04,
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="
                font-black
                tracking-[-0.05em]
                text-zinc-400
                text-[20vw]
                leading-[0.8]
              "
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );

  // Floating icons animation
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
        min-h-[70svh]
        sm:min-h-[80vh]
        lg:min-h-screen
      "
    >
      {/* Decorative floating icons */}
      {!isMobile && (
        <>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-[15%] left-[10%] z-5 opacity-20"
          >
            <Code2 className="w-16 h-16 text-zinc-700" />
          </motion.div>
          
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
            className="absolute top-[25%] right-[12%] z-5 opacity-20"
          >
            <Sparkles className="w-20 h-20 text-zinc-400" />
          </motion.div>
          
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-[30%] left-[15%] z-5 opacity-20"
          >
            <Rocket className="w-14 h-14 text-zinc-600" />
          </motion.div>
        </>
      )}

      {/* MOBILE: name ABOVE character */}
      {isMobile && (
        <div className="relative z-20 pt-22 flex justify-center">
          <NameBlock />
        </div>
      )}

      {/* DESKTOP: name in BACKGROUND */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <NameBlock />
        </div>
      )}

      {/* CHARACTER IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="absolute inset-0 z-10 flex items-end justify-center"
      >
        <motion.img
          src={character}
          alt="Developer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="
            object-contain
            object-bottom
            h-[55svh]
            sm:h-[65vh]
            md:h-[75vh]
            lg:h-[85vh]
            max-w-[90vw]
            drop-shadow-2xl
          "
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;