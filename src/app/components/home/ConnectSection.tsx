import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function ConnectSection() {
  return (
    <section>
      <div className="flex justify-center items-center space-x-8 mt-10">
        <div className="flex flex-col justify-center items-center">
          <a href="https://github.com/PinakeshwarVaishnav">
            <FaGithub
              size={40}
              className="transform transition-transform duration-300 hover:scale-110"
            />
            <span className="mt-3">GitHub</span>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a href="https://www.linkedin.com/in/pinakeshwar-vaishnav-519750306/">
            <FaLinkedin
              size={40}
              className="transform transition-transform duration-300 hover:scale-110"
            />
            <span className="mt-3">LinkedIn</span>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <a href="https://twitter.com/PinakeshwarV">
            <FaXTwitter
              size={40}
              className="transform transition-transform duration-300 hover:scale-110"
            />
            <span className="mt-3">X</span>
          </a>
        </div>
      </div>
    </section>
  );
}
