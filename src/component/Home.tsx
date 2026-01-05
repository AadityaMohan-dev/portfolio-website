import { motion } from "framer-motion";
import character from "../assets/HomeCharacter.png";
import useIsMobile from "../hooks/useIsMobile"
function Home() {
  const isMobile = useIsMobile();

  const name = ["A", "A", "D", "I", "T", "Y", "A"];
  const lastName = ["M", "O", "H", "A", "N"];

  const NameBlock = () => (
    <div className="flex flex-col items-center justify-center pointer-events-none select-none">
      {/* AADITYA */}
      <div className="overflow-hidden">
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
      <div className="overflow-hidden -mt-[6vw]">
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
      {/* MOBILE: name ABOVE character */}
      {isMobile && (
        <div className="relative z-20 pt-10 flex justify-center">
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
        <img
          src={character}
          alt="Developer"
          className="
            object-contain
            object-bottom
            h-[55svh]
            sm:h-[65vh]
            md:h-[75vh]
            lg:h-[85vh]
            max-w-[90vw]
          "
        />
      </motion.div>
    </section>
  );
}

export default Home;
