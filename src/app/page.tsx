import RecentProjects from "./components/home/RecentProjects";
import ConnectSection from "./components/home/ConnectSection";
import Head from "next/head";
import { Code, Brain } from "lucide-react";

export default function App() {
  return (
    <div>
      <Head>
        <title>Pinakeshwar Vaishnav - Full Stack AI Engineer</title>
        <meta
          name="description"
          content="Portfolio of Pinakeshwar Vaishnav, Full Stack AI Engineer"
        />
      </Head>
      <main>
        <section className="py-10 px-5 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold">
            Hi, I&apos;m
            <span className="text-sky-500"> Pinakeshwar Vaishnav</span>
          </h1>
          <p className="mt-4 font-bold text-lg flex items-center gap-2">
            <span className="text-green-600 flex items-center">
              <Code className="mr-1" size={24} />
              Full Stack{" "}
            </span>
            <span className="text-sky-500 flex items-center">
              <Brain className="mr-1" size={24} />
              AI Engineer
            </span>
          </p>
        </section>
        <RecentProjects />
        <ConnectSection />
      </main>
    </div>
  );
}
