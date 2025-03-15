import { JSX } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center"
    >
      <div className="p-3 rounded-full bg-gray-800 hover:bg-sky-500/20 transition-all duration-300 group-hover:scale-110 mb-2">
        <div className="text-gray-400 group-hover:text-sky-400 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <span className="text-sm text-gray-400 group-hover:text-sky-400 transition-colors duration-300">
        {label}
      </span>
    </a>
  );
}

export default function ConnectSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 md:space-x-12 mt-8">
          <SocialLink
            href="https://github.com/PinakeshwarVaishnav"
            icon={<FaGithub size={24} />}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/pinakeshwar-vaishnav-519750306/"
            icon={<FaLinkedin size={24} />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://twitter.com/PinakeshwarV"
            icon={<FaXTwitter size={24} />}
            label="X"
          />
        </div>
      </div>
    </section>
  );
}
