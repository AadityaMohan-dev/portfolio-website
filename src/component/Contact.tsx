import { Mail, Phone, Sparkles, Send, MapPin } from "lucide-react";
import hello from "../assets/hello.gif";
import profile from "../assets/Profile.png";
import bg from "../assets/p2.png";
import bg2 from "../assets/p3.png";

function Contact() {
  const email = "aadimohan51@gmail.com";
  const phone = "+91 8881685609";

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16"
    >
      {/* Heading */}
      <h1 className="pt-8 sm:pt-12 lg:pt-16 pb-2 sm:pb-3 lg:pb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        Let's Connect
      </h1>

      <p className="pb-6 sm:pb-8 lg:pb-10 max-w-4xl text-sm sm:text-base md:text-lg lg:text-2xl text-zinc-400 leading-relaxed">
        Open to full-time opportunities, freelance projects, and collaborations.
        Let's build something impactful together.
      </p>

      {/* Main Card */}
      <div className="relative rounded-xl sm:rounded-2xl bg-zinc-800 p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 bg-[#f6936b] opacity-10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          {/* Images Section */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 lg:mb-12">
            {/* Hello GIF */}
            <div className="relative group flex-shrink-0 mx-auto lg:mx-0">
              <img
                src={hello}
                alt="Hello"
                className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 rounded-xl sm:rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <Sparkles className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              <div className="relative group overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
                <img
                  src={bg2}
                  alt=""
                  className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl ring-2 sm:ring-3 lg:ring-4 ring-white/20">
                <img
                  src={profile}
                  alt="Profile"
                  className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
                <img
                  src={bg}
                  alt=""
                  className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-3 sm:gap-4 lg:gap-5 rounded-xl sm:rounded-2xl border sm:border-2 border-zinc-700 bg-zinc-900 p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-[#f6936b] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-zinc-800 group-hover:bg-[#f6936b] transition-colors duration-300 flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-zinc-300 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm lg:text-base text-zinc-400 font-medium mb-0.5 sm:mb-1">
                  Email Me
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-semibold break-all group-hover:text-[#f6936b] transition-colors">
                  {email}
                </p>
              </div>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 group-hover:text-[#f6936b] group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${phone}`}
              className="group flex items-center gap-3 sm:gap-4 lg:gap-5 rounded-xl sm:rounded-2xl border sm:border-2 border-zinc-700 bg-zinc-900 p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-[#f6936b] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-zinc-800 group-hover:bg-[#f6936b] transition-colors duration-300 flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-zinc-300 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm lg:text-base text-zinc-400 font-medium mb-0.5 sm:mb-1">
                  Call Me
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-semibold group-hover:text-[#f6936b] transition-colors whitespace-nowrap">
                  {phone}
                </p>
              </div>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 group-hover:text-[#f6936b] group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
            </a>
          </div>

          {/* Location Badge */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full bg-zinc-900 border border-zinc-700">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#f6936b]" />
              <span className="text-xs sm:text-sm lg:text-base text-zinc-300 font-medium">
                Greater Noida, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;