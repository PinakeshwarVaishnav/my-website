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
        <section>
          <h1>Hi there! I&apos;m Pinakeshwar Vaishnav</h1>
          <p>Full Stack Developer & AI/ML Enthusiast</p>
        </section>
        <RecentProjects />
        <ConnectSection />
      </main>
    </div>
  );
}
