import { motion } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  Rocket, 
  ChevronDown,
  Braces,
  Terminal,
  Database,
  Palette,
  Zap,
  Coffee,
  Layers,
  Globe
} from "lucide-react";
import character from "../assets/HomeCharacter.png";
import useIsMobile from "../hooks/useIsMobile";
import type { Variants } from "framer-motion";

function Home() {
  const isMobile = useIsMobile();

  const name = ["A", "A", "D", "I", "T", "Y", "A"];
  const lastName = ["M", "O", "H", "A", "N"];

  // Floating icons animation
  const floatingVariants: Variants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  // Mobile floating animation - slower and subtle
  const mobileFloatVariants: Variants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Mobile pulse animation
  const pulseVariants: Variants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Tech tags with icons
  const techTags = [
    { name: "Java", icon: Coffee },
    { name: "Spring Boot", icon: Zap },
    { name: "React", icon: Braces },
    { name: "UI/UX", icon: Palette },
  ];

  // Mobile Layout - Complete Redesign
  if (isMobile) {
    return (
      <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-transparent via-transparent to-zinc-100/50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-4 w-32 h-32 bg-[#F78154]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-4 w-40 h-40 bg-zinc-400/10 rounded-full blur-3xl" />
        </div>

        {/* Floating Icons - Background decoration */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Top right area */}
          <motion.div
            variants={mobileFloatVariants}
            animate="float"
            className="absolute top-28 right-6"
          >
            <Code2 className="w-6 h-6 text-zinc-300" />
          </motion.div>

          <motion.div
            variants={mobileFloatVariants}
            animate="float"
            transition={{ delay: 0.5 }}
            className="absolute top-44 right-12"
          >
            <Terminal className="w-5 h-5 text-[#F78154]/30" />
          </motion.div>

          {/* Left side */}
          <motion.div
            variants={mobileFloatVariants}
            animate="float"
            transition={{ delay: 1 }}
            className="absolute top-52 left-4"
          >
            <Database className="w-5 h-5 text-zinc-300" />
          </motion.div>

          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="absolute top-36 left-8"
          >
            <Sparkles className="w-4 h-4 text-[#F78154]/40" />
          </motion.div>

          {/* Middle area */}
          <motion.div
            variants={mobileFloatVariants}
            animate="float"
            transition={{ delay: 1.5 }}
            className="absolute top-[45%] right-4"
          >
            <Layers className="w-5 h-5 text-zinc-300" />
          </motion.div>

          <motion.div
            variants={mobileFloatVariants}
            animate="float"
            transition={{ delay: 2 }}
            className="absolute top-[50%] left-6"
          >
            <Globe className="w-5 h-5 text-zinc-300" />
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            transition={{ delay: 0.3 }}
            className="absolute top-32 right-24"
          >
            <div className="w-2 h-2 rounded-full bg-[#F78154]/30" />
          </motion.div>

          <motion.div
            variants={pulseVariants}
            animate="pulse"
            transition={{ delay: 0.8 }}
            className="absolute top-48 left-20"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-400/40" />
          </motion.div>

          <motion.div
            variants={pulseVariants}
            animate="pulse"
            transition={{ delay: 1.2 }}
            className="absolute top-[40%] right-16"
          >
            <div className="w-2 h-2 rounded-full bg-zinc-400/30" />
          </motion.div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Top Section - Name & Title */}
          <div className="flex-shrink-0 pt-24 px-6">
            {/* Greeting with icon */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-2"
            >
              <Rocket className="w-4 h-4 text-[#404a40]" />
              <p className="text-zinc-500 text-sm font-medium tracking-wider uppercase">
                Hello, I'm
              </p>
            </motion.div>

            {/* First Name - AADITYA */}
            <div className="overflow-hidden">
              <motion.div className="flex">
                {name.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.05,
                      duration: 0.5,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="font-black tracking-[-0.04em] text-zinc-800 text-[14vw] leading-[0.9]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Last Name - MOHAN */}
            <div className="overflow-hidden -mt-1">
              <motion.div className="flex">
                {lastName.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.05,
                      duration: 0.5,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="font-black tracking-[-0.04em] text-[#404a40] text-[14vw] leading-[0.9]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Role/Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 flex items-center gap-2"
            >
              <div className="h-[2px] w-8 bg-[#404a40]" />
              <Code2 className="w-4 h-4 text-zinc-500" />
              <p className="text-zinc-600 text-base font-medium">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Tags with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {techTags.map((tag, i) => {
                const IconComponent = tag.icon;
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 + i * 0.1 }}
                    className="px-3 py-1.5 text-xs font-medium text-zinc-600 bg-white/80 backdrop-blur-sm rounded-full border border-zinc-200 flex items-center gap-1.5"
                  >
                    <IconComponent className="w-3 h-3 text-[#404a40]" />
                    {tag.name}
                  </motion.span>
                );
              })}
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mt-5 flex items-center gap-4"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#404a40]" />
                <span className="text-xs text-zinc-500">3+ Years Exp</span>
              </div>
              {/* <div className="w-1 h-1 rounded-full bg-zinc-300" />
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#F78154]" />
                <span className="text-xs text-zinc-500">20+ Projects</span>
              </div> */}
            </motion.div>
          </div>

          {/* Character Image - Takes remaining space */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex-grow relative flex items-end justify-center mt-4"
          >
            <img
              src={character}
              alt="Developer"
              className="h-full max-h-[50vh] w-auto object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              <ChevronDown className="w-6 h-6 text-zinc-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Desktop Layout
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
              className="font-black tracking-[-0.05em] text-zinc-700 text-[20vw] leading-[0.8]"
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
              className="font-black tracking-[-0.05em] text-zinc-400 text-[20vw] leading-[0.8]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-transparent min-h-screen">
      {/* Decorative floating icons */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-[15%] left-[10%] z-5 opacity-20"
      >
        <Code2 className="w-16 h-16 text-zinc-700" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 0.5 }}
        className="absolute top-[25%] right-[12%] z-5 opacity-20"
      >
        <Sparkles className="w-20 h-20 text-zinc-400" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
        className="absolute bottom-[30%] left-[15%] z-5 opacity-20"
      >
        <Rocket className="w-14 h-14 text-zinc-600" />
      </motion.div>

      {/* Name in background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <NameBlock />
      </div>

      {/* Character image */}
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
          className="object-contain object-bottom h-[85vh] max-w-[90vw] drop-shadow-2xl"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
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