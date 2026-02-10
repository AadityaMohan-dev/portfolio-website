import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Rocket,
  Terminal,
  Database,
  Hexagon,
  Triangle,
  Diamond,
  Zap,
  Coffee,
} from "lucide-react";
import character from "../assets/HomeCharacter.png";
import useScreenSize from "../hooks/useScreenSize";
import type { Variants } from "framer-motion";

function Home() {
  const { isMobile } = useScreenSize();

  const firstName = ["A", "A", "D", "I", "T", "Y", "A"];
  const lastName = ["M", "O", "H", "A", "N"];

  const floatSlow: Variants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 3, -3, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatMedium: Variants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, -5, 5, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatFast: Variants = {
    float: {
      y: [0, -12, 0],
      x: [0, 5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };



  // ═══════════════════════════════════
  // MOBILE
  // ═══════════════════════════════════
  if (isMobile) {
    return (
      <section className="relative w-full h-screen overflow-hidden bg-transparent">
        {/* Floating Icons - No containers */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            variants={floatSlow}
            animate="float"
            className="absolute top-24 right-4"
          >
            <Hexagon className="w-5 h-5 text-zinc-400 stroke-[1.5]" />
          </motion.div>

          <motion.div
            variants={floatMedium}
            animate="float"
            className="absolute top-40 left-3"
          >
            <Triangle className="w-5 h-5 text-zinc-400 stroke-[1.5]" />
          </motion.div>

          <motion.div
            variants={floatFast}
            animate="float"
            className="absolute top-56 right-8"
          >
            <Diamond className="w-4 h-4 text-zinc-400 stroke-[1.5]" />
          </motion.div>

          <motion.div
            variants={floatSlow}
            animate="float"
            className="absolute bottom-[40%] left-4"
          >
            <Zap className="w-5 h-5 text-zinc-400 stroke-[1.5]" />
          </motion.div>

          <motion.div
            variants={floatMedium}
            animate="float"
            className="absolute bottom-[35%] right-6"
          >
            <Terminal className="w-4 h-4 text-zinc-400 stroke-[1.5]" />
          </motion.div>

          <motion.div
            variants={floatFast}
            animate="float"
            className="absolute top-32 left-1/2"
          >
            <Code2 className="w-4 h-4 text-zinc-400 stroke-[1.5]" />
          </motion.div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 h-full flex flex-col  px-4 pt-10">
          {/* Top Section - Intro */}
          <div className="flex-shrink-0 pt-20 px-4">
            {/* Greeting Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2.5 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="p-1.5 rounded-lg bg-gradient-to-br from-[#000000] to-[#000000] shadow-md shadow-[#58a291]/30"
              >
                <Coffee className="w-3.5 h-3.5 text-white" />
              </motion.div>
              <p className="text-zinc-500 text-xl  font-semibold tracking-widest uppercase">
                Hello, I'm
              </p>
            </motion.div>

            {/* Name - First */}
            <div className="overflow-hidden">
              <motion.div className="flex">
                {firstName.map((letter, i) => (
                  <motion.span
                    key={`f-${i}`}
                    initial={{ y: "120%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2 + i * 0.04,
                      duration: 0.6,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 text-[15vw] leading-[0.85]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Name - Last */}
            <div className="overflow-hidden -mt-1">
              <motion.div className="flex">
                {lastName.map((letter, i) => (
                  <motion.span
                    key={`l-${i}`}
                    initial={{ y: "120%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.45 + i * 0.04,
                      duration: 0.6,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="font-black tracking-[-0.05em] text-zinc-500 bg-clip-text bg-gradient-to-br text-[16vw] leading-[0.85]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 flex items-center gap-2"
            >
              <motion.div
                className="h-[2px] rounded-full bg-gradient-to-r from-[#58a291] via-[#58a291] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50">
                <Code2 className="w-3.5 h-3.5 text-[#58a291]" />
                <p className="text-zinc-200 text-xs font-semibold">Full Stack Developer</p>
              </div>
            </motion.div>

           
          </div>

          {/* Character Section - Pushed to Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative flex items-end justify-center"
          >
            {/* Glow effect behind character */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-gradient-to-t from-[#F78154]/12 via-[#F78154]/5 to-transparent blur-2xl" />
            </div>

            {/* Character - Touching bottom */}
            <motion.img
              src={character}
              alt="Developer Character"
              className="h-auto max-h-[55vh] w-auto object-contain object-bottom drop-shadow-2xl relative z-10"
              whileTap={{ scale: 0.98 }}
              style={{
                filter: "drop-shadow(0 15px 30px rgba(247, 129, 84, 0.2))",
              }}
            />
          </motion.div>
        </div>
      </section>
    );
  }

  // ═══════════════════════════════════
  // DESKTOP — Clean floating icons only
  // ═══════════════════════════════════
  return (
    <section className="relative w-full overflow-hidden bg-transparent min-h-screen">
      {/* ── Floating Icons - No containers ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <motion.div variants={floatSlow} animate="float" className="absolute top-[12%] left-[8%]">
          <Code2 className="w-10 h-10 text-zinc-500 stroke-[1]" />
        </motion.div>

        <motion.div variants={floatMedium} animate="float" className="absolute top-[20%] right-[10%]">
          <Sparkles className="w-12 h-12 text-zinc-500 stroke-[1]" />
        </motion.div>

        <motion.div variants={floatFast} animate="float" className="absolute bottom-[25%] left-[12%]">
          <Rocket className="w-9 h-9 text-zinc-500 stroke-[1]" />
        </motion.div>

        <motion.div variants={floatSlow} animate="float" className="absolute top-[40%] left-[5%]">
          <Database className="w-7 h-7 text-zinc-500 stroke-[1]" />
        </motion.div>

        <motion.div variants={floatMedium} animate="float" className="absolute bottom-[35%] right-[8%]">
          <Terminal className="w-8 h-8 text-zinc-500  stroke-[1]" />
        </motion.div>

        <motion.div variants={floatFast} animate="float" className="absolute top-[60%] right-[15%]">
          <Hexagon className="w-6 h-6 text-zinc-500 stroke-[1]" />
        </motion.div>

        <motion.div variants={floatSlow} animate="float" className="absolute top-[30%] left-[18%]">
          <Triangle className="w-5 h-5 text-zinc-500  stroke-[1]" />
        </motion.div>

        <motion.div variants={floatMedium} animate="float" className="absolute bottom-[45%] left-[6%]">
          <Diamond className="w-5 h-5 text-zinc-500 stroke-[1]" />
        </motion.div>
      </div>

      {/* ── Name Background ── */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none select-none">
        <div className="flex flex-col items-center justify-center">
          <div className="overflow-hidden relative">
            <motion.div className="flex">
              {firstName.map((letter, i) => (
                <motion.span
                  key={`df-${i}`}
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="font-black tracking-[-0.06em] text-zinc-700/80 text-[18vw] leading-[0.8]"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div className="overflow-hidden -mt-[5vw] relative">
            <motion.div className="flex">
              {lastName.map((letter, i) => (
                <motion.span
                  key={`dl-${i}`}
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="font-black tracking-[-0.06em] text-zinc-300/60 text-[18vw] leading-[0.8]"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Character ── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="absolute inset-0 z-10 flex items-end justify-center"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[30%] bg-gradient-to-t from-[#F78154]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
        <motion.img
          src={character}
          alt="Developer"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="object-contain object-bottom h-[82vh] max-w-[60vw] drop-shadow-2xl relative z-10 cursor-pointer"
          style={{ filter: "drop-shadow(0 25px 50px rgba(247, 129, 84, 0.15))" }}
        />
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.2em]">
            Scroll
          </span>
          <div className="w-5 h-9 border-2 border-zinc-300 rounded-full flex items-start justify-center p-1.5 bg-white/50 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 bg-gradient-to-b from-[#F78154] to-[#FF9B7A] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;