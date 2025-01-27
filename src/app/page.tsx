import RecentProjects from "./components/home/RecentProjects";
import ConnectSection from "./components/home/ConnectSection";
import Head from "next/head";

export default function App() {
  return (
    <div>
      <Head>
        <title>
          Pinakeshwar Vaishnav - Full Stack Developer & AI/ML Enthusiast
        </title>
        <meta
          name="description"
          content="Portfolio of Pinakeshwar Vaishnav, Full Stack Developer & AI/ML Enthusiast"
        />
      </Head>
      <main>
        <section className="py-10 px-5">
          <h1 className="text-3xl font-extrabold">
            Hi, I&apos;m
            <span className="text-sky-500"> Pinakeshwar Vaishnav</span>
          </h1>
          <p className="mt-2 font-bold">
            <span className="text-green-600">Full Stack Developer</span>
            <span className="text-amber-500"> & </span>
            <span className="text-sky-500">AI/ML Enthusiast</span>
          </p>
        </section>
        <RecentProjects />
        <ConnectSection />
      </main>
    </div>
  );
}
