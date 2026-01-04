import { FiMail, FiPhoneCall } from "react-icons/fi";
import hello from "../assets/hello.gif";
import profile from "../assets/Profile.png";
import bg from "../assets/p2.png";
import bg2 from "../assets/p3.png";

function Contact() {
  const email = "aadimohan51@gmail.com";
  const phone = "+91 888 1685 609";

  return (
    <div className="px-4 sm:px-6 lg:px-10 pb-10">
      {/* Heading */}
      <h1 className="py-8 text-2xl font-bold tracking-tight sm:text-3xl">
        Contact Me
      </h1>

      <p className="pb-8 text-sm italic text-zinc-400 sm:text-lg lg:text-xl">
        "Open to full-time opportunities, freelance projects, and
        collaborations. Let’s connect and build something impactful."
      </p>

      {/* Card */}
      <div className="rounded-2xl bg-zinc-800 p-4 sm:p-6 lg:p-10">
        {/* Images */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <img
            src={hello}
            alt="Hello"
            className="h-24 rounded-xl bg-contain sm:h-28 md:h-36"
          />

          <div className="grid w-full max-w-xl grid-cols-3 gap-2 sm:gap-4 md:w-3/4">
            <img src={bg2} alt="" className="h-20 rounded-xl sm:h-24 md:h-36" />
            <img
              src={profile}
              alt=""
              className="h-20 rounded-xl sm:h-24 md:h-36"
            />
            <img src={bg} alt="" className="h-20 rounded-xl sm:h-24 md:h-36" />
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Email */}
          <div className="flex items-center gap-4 rounded-xl bg-zinc-900 p-5">
            <FiMail className="text-2xl" />
            <div>
              <p className="text-sm text-zinc-400">Email</p>
              <a
                href={`mailto:${email}`}
                className="text-white hover:underline"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 rounded-xl bg-zinc-900 p-5">
            <FiPhoneCall className="text-2xl" />
            <div>
              <p className="text-sm text-zinc-400">Phone</p>
              <a href={`tel:${phone}`} className="text-white hover:underline">
                {phone}
              </a>
            </div>
          </div>
        </div>

        {/* CTA Button */}

        </div>
      </div>
    
  );
}

export default Contact;
