import { FiMail, FiPhoneCall } from "react-icons/fi";
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
      <h1 className="pt-16 pb-6 text-2xl sm:text-3xl font-bold tracking-tight">
        Contact
      </h1>

      <p className="pb-8 max-w-3xl text-sm sm:text-base lg:text-lg italic text-zinc-500">
        Open to full-time opportunities, freelance projects, and collaborations.
        Let’s connect and build something impactful.
      </p>

      {/* Card */}
      <div className="rounded-xl  bg-zinc-600 p-4 sm:p-6 lg:p-8">
        {/* Images */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Hello GIF */}
          <img
            src={hello}
            alt="Hello"
            className="h-20 sm:h-24 md:h-32 rounded-lg object-contain mx-auto md:mx-0"
          />

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-md mx-auto md:mx-0">
            <img
              src={bg2}
              alt=""
              className="h-20 sm:h-24 md:h-32 rounded-lg object-cover"
            />
            <img
              src={profile}
              alt="Profile"
              className="h-20 sm:h-24 md:h-32 rounded-lg object-cover"
            />
            <img
              src={bg}
              alt=""
              className="h-20 sm:h-24 md:h-32 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Email */}
          <div className="flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
            <FiMail className="text-xl sm:text-2xl text-zinc-300" />
            <div>
              <p className="text-xs sm:text-sm text-zinc-400">Email</p>
              <a
                href={`mailto:${email}`}
                className="text-sm sm:text-base text-white hover:underline break-all"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
            <FiPhoneCall className="text-xl sm:text-2xl text-zinc-300" />
            <div>
              <p className="text-xs sm:text-sm text-zinc-400">Phone</p>
              <a
                href={`tel:${phone}`}
                className="text-sm sm:text-base text-white hover:underline"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
