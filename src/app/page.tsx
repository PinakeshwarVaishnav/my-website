import { Inter } from "next/font/google";
import RecentProjects from "./components/home/RecentProjects";
import ConnectSection from "./components/home/ConnectSection";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <div className={inter.className}>
      <h1>Full Stack Developer & AI/ML Enthusiast</h1>
      <p>
        Hi there! I&apos;m Pinakeshwar Vaishnav and I&apos;m a Full Stack
        Developer. I&apos;m also passionate about Artificial Intelligence and
        Machine Learning, with a strong interest in exploring their applications
        in real-world projects.
      </p>
      <RecentProjects />
      <ConnectSection />
    </div>
  );
}
