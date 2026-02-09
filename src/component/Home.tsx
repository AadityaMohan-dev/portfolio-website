import { motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Sparkles,
  Rocket,
  Terminal,
  Database,
  Hexagon,
  Triangle,
  Diamond,
  Star,
  Github,
  Linkedin,
  Mail,
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

  const glowPulse: Variants = {
    pulse: {
      scale: [1, 1.3, 1],
      opacity: [0.2, 0.5, 0.2],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const orbitVariant: Variants = {
    orbit: {
      rotate: 360,
      transition: { duration: 25, repeat: Infinity, ease: "linear" },
    },
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  // ═══════════════════════════════════
  // MOBILE
  // ═══════════════════════════════════
  if (isMobile) {
    return (
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Ambient bg */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-60 h-60 bg-[#F78154] rounded-full blur-[80px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-40 -left-20 w-72 h-72 bg-zinc-500 rounded-full blur-[100px]"
          />

          {/* Floating shapes */}
          <motion.div variants={floatSlow} animate="float" className="absolute top-24 right-8">
            <Hexagon className="w-5 h-5 text-zinc-300/40 stroke-1" />
          </motion.div>
          <motion.div variants={floatMedium} animate="float" className="absolute top-40 right-16">
            <Triangle className="w-4 h-4 text-[#F78154]/20 stroke-1" />
          </motion.div>
          <motion.div variants={floatFast} animate="float" className="absolute top-56 left-6">
            <Diamond className="w-4 h-4 text-zinc-400/30 stroke-1" />
          </motion.div>
          <motion.div variants={floatSlow} animate="float" className="absolute top-32 left-4">
            <Code2 className="w-5 h-5 text-zinc-300/50" />
          </motion.div>
          <motion.div variants={floatMedium} animate="float" className="absolute top-48 right-10">
            <Terminal className="w-4 h-4 text-zinc-300/40" />
          </motion.div>

          {[
            { top: "20%", left: "15%", delay: 0 },
            { top: "35%", right: "20%", delay: 1 },
            { top: "55%", left: "25%", delay: 2 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              variants={glowPulse}
              animate="pulse"
              transition={{ delay: dot.delay }}
              className="absolute"
              style={dot}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#F78154]/40" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-screen flex flex-col">
          <div className="flex-shrink-0 pt-24 px-6">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-zinc-200/60 mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-zinc-600">Available for work</span>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-1"
            >
              <Rocket className="w-4 h-4 text-[#F78154]" />
              <p className="text-zinc-500 text-sm font-medium tracking-wider uppercase">
                Hello, I'm
              </p>
            </motion.div>

            {/* First name */}
            <div className="overflow-hidden">
              <motion.div className="flex">
                {firstName.map((letter, i) => (
                  <motion.span
                    key={`f-${i}`}
                    initial={{ y: "120%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 + i * 0.04, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="font-black tracking-[-0.04em] text-zinc-800 text-[15vw] leading-[0.85]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Last name */}
            <div className="overflow-hidden -mt-1">
              <motion.div className="flex">
                {lastName.map((letter, i) => (
                  <motion.span
                    key={`l-${i}`}
                    initial={{ y: "120%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.5 + i * 0.04, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="font-black tracking-[-0.04em] text-[#F78154] text-[15vw] leading-[0.85]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 flex items-center gap-3"
            >
              <div className="h-[2px] w-10 bg-gradient-to-r from-[#F78154] to-transparent" />
              <Code2 className="w-4 h-4 text-zinc-500" />
              <p className="text-zinc-600 text-base font-semibold">Full Stack Developer</p>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-5 flex items-center gap-3"
            >
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className="w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm border border-zinc-200/80 flex items-center justify-center shadow-sm active:scale-90 transition-transform"
                  >
                    <Icon className="w-4 h-4 text-zinc-600" />
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="ml-auto flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 rounded-full"
              >
                <Sparkles className="w-3 h-3 text-[#F78154]" />
                <span className="text-xs font-medium text-white">3+ Years</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Character */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex-grow relative flex items-end justify-center mt-4"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-gradient-to-t from-[#F78154]/10 via-transparent to-transparent blur-2xl pointer-events-none" />
            <img
              src={character}
              alt="Developer"
              className="h-full max-h-[48vh] w-auto object-contain object-bottom drop-shadow-2xl relative z-10"
            />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              <ChevronDown className="w-5 h-5 text-zinc-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ═══════════════════════════════════
  // DESKTOP — Clean hero, no side panels
  // ═══════════════════════════════════
  return (
    <section className="relative w-full overflow-hidden bg-transparent min-h-screen">
      {/* ── Ambient Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#F78154] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.1, 0.04], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 -left-40 w-[600px] h-[600px] bg-zinc-500 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F78154] rounded-full blur-[100px]"
        />

        {/* Orbit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div variants={orbitVariant} animate="orbit" className="w-[60vw] h-[60vw]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <Star className="w-3 h-3 text-zinc-300/20 fill-zinc-300/10" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <Diamond className="w-3 h-3 text-[#F78154]/15" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Hexagon className="w-3 h-3 text-zinc-300/15 stroke-1" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Triangle className="w-3 h-3 text-zinc-400/15 stroke-1" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Floating Icons ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <motion.div variants={floatSlow} animate="float" className="absolute top-[12%] left-[8%]">
          <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-zinc-200/10">
            <Code2 className="w-8 h-8 text-zinc-400/40" />
          </div>
        </motion.div>
        <motion.div variants={floatMedium} animate="float" className="absolute top-[20%] right-[10%]">
          <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-zinc-200/10">
            <Sparkles className="w-10 h-10 text-[#F78154]/25" />
          </div>
        </motion.div>
        <motion.div variants={floatFast} animate="float" className="absolute bottom-[25%] left-[12%]">
          <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-zinc-200/10">
            <Rocket className="w-7 h-7 text-zinc-500/30" />
          </div>
        </motion.div>
        <motion.div variants={floatSlow} animate="float" className="absolute top-[40%] left-[5%]">
          <div className="p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-zinc-200/10">
            <Database className="w-6 h-6 text-zinc-400/30" />
          </div>
        </motion.div>
        <motion.div variants={floatMedium} animate="float" className="absolute bottom-[35%] right-[8%]">
          <div className="p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-zinc-200/10">
            <Terminal className="w-6 h-6 text-zinc-400/25" />
          </div>
        </motion.div>

        {/* Particles */}
        {[
          { top: "15%", left: "25%", delay: 0 },
          { top: "30%", right: "25%", delay: 1.5 },
          { top: "60%", left: "20%", delay: 3 },
          { top: "45%", right: "18%", delay: 0.8 },
          { top: "75%", left: "30%", delay: 2 },
        ].map((p, i) => (
          <motion.div
            key={i}
            variants={glowPulse}
            animate="pulse"
            transition={{ delay: p.delay }}
            className="absolute"
            style={p}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#F78154]/30" />
          </motion.div>
        ))}
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[30%] bg-gradient-to-t from-[#F78154]/8 via-transparent to-transparent blur-3xl pointer-events-none" />
        <motion.img
          src={character}
          alt="Developer"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="object-contain object-bottom h-[82vh] max-w-[60vw] drop-shadow-2xl relative z-10 cursor-pointer"
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
          <div className="w-5 h-9 border-2 border-zinc-300 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 bg-zinc-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;