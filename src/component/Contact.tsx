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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
    >
      {/* Heading */}
      <h1 className="pt-16 pb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        Let's Connect
      </h1>

      <p className="pb-10 max-w-4xl text-base sm:text-lg lg:text-2xl text-zinc-400">
        Open to full-time opportunities, freelance projects, and collaborations.
        Let's build something impactful together.
      </p>

      {/* Main Card */}
      <div className="relative rounded-2xl bg-zinc-800 p-6 sm:p-8 lg:p-12 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f6936b] opacity-10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          {/* Images Section */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between mb-12">
            {/* Hello GIF */}
            <div className="relative group flex-shrink-0">
              <img
                src={hello}
                alt="Hello"
                className="h-28 sm:h-36 lg:h-44 rounded-2xl object-contain mx-auto lg:mx-0 transition-transform duration-300 group-hover:scale-105"
              />
              <Sparkles className="absolute -top-3 -right-3 w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg mx-auto lg:mx-0">
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={bg2}
                  alt=""
                  className="h-28 sm:h-36 lg:h-44 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl ring-4 ring-white/20">
                <img
                  src={profile}
                  alt="Profile"
                  className="h-28 sm:h-36 lg:h-44 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={bg}
                  alt=""
                  className="h-28 sm:h-36 lg:h-44 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-5 rounded-2xl border-2 border-zinc-700 bg-zinc-900 p-6 sm:p-8 transition-all duration-300 hover:border-[#f6936b] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-4 rounded-xl bg-zinc-800 group-hover:bg-[#f6936b] transition-colors duration-300">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-300 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base text-zinc-400 font-medium mb-1">
                  Email Me
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold break-all group-hover:text-[#f6936b] transition-colors">
                  {email}
                </p>
              </div>
              <Send className="w-5 h-5 text-zinc-600 group-hover:text-[#f6936b] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${phone}`}
              className="group flex items-center gap-5 rounded-2xl border-2 border-zinc-700 bg-zinc-900 p-6 sm:p-8 transition-all duration-300 hover:border-[#f6936b] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-4 rounded-xl bg-zinc-800 group-hover:bg-[#f6936b] transition-colors duration-300">
                <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-300 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <p className="text-sm sm:text-base text-zinc-400 font-medium mb-1">
                  Call Me
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold group-hover:text-[#f6936b] transition-colors">
                  {phone}
                </p>
              </div>
              <Send className="w-5 h-5 text-zinc-600 group-hover:text-[#f6936b] group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Location Badge */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700">
              <MapPin className="w-5 h-5 text-[#f6936b]" />
              <span className="text-sm sm:text-base text-zinc-300 font-medium">
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