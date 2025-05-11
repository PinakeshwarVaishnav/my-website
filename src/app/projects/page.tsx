import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projects = [
{
    id: 13,
    title: "Meaningful Match",
    description: "Find Your Perfect Match, Not Endless Options",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://meaningful-match.vercel.app/",
  },
{
    id: 12,
    title: "Travel Buddy",
    description: "Find Your Perfect Travel Companion",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://travel-buddy-sable.vercel.app/",
  },
  {
    id: 11,
    title: "AI Assist",
    description: "Your AI Assistant, Always Ready",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://ai-assist-one-gamma.vercel.app/",
  },
  {
    id: 10,
    title: "SoftSell",
    description:
      "SoftSell helps businesses sell unused software licenses quickly and at the best market rates. Turn your idle software assets into cash.",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://softsell-pearl.vercel.app/",
  },
  {
    id: 9,
    title: "Unnoise",
    description: "Cut through the noise in hiring",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://unnoise.vercel.app/",
  },
  {
    id: 8,
    title: "LinguaAI",
    description: "Master Any Language with AI",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://lingua-ai-two.vercel.app/",
  },
  {
    id: 7,
    title: "Creator's Leverage",
    description: "Helping creators bring their product ideas to life",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://creator-leverage.vercel.app/",
  },
  {
    id: 6,
    title: "Calling Compass",
    description: "Turn Work Into Play",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://calling-compass.vercel.app/",
  },
  {
    id: 5,
    title: "AI Tutor",
    description: "Learn anything with your personal AI tutor available 24/7",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://ai-tutor-seven-neon.vercel.app/",
  },
  {
    id: 4,
    title: "AI Companion",
    description: "Your AI Companion for a Better Life",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://ai-companion-chi-one.vercel.app/",
  },
  {
    id: 3,
    title: "Persona AI",
    description:
      "Persona AI is a web application for creating AI personas that can interact with audiences via voice, text, and other mediums, offering a new level of personalized digital engagement.",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://persona-ai-delta.vercel.app/",
  },
  {
    id: 2,
    title: "TechNova Innovations",
    description: "Website for a fictional tech company",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://modern-tech-website-prototype.vercel.app/",
  },
  {
    id: 1,
    title: "Inner Monologue Journal",
    description:
      "A minimalist journal app where users can record their thoughts as they come.",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://inner-monologue-journal.vercel.app/",
  },
  {
    id: 0,
    title: "Hobby Matchmaker",
    description: "Find Your Hobby Soulmates",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://hobby-matchmaker-dusky.vercel.app/",
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <main className="w-full max-w-4xl px-5 py-6">
      <Link
        href="/"
        className="inline-flex items-center text-sky-500 hover:text-sky-400 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>

      <h1 className="text-3xl font-extrabold mb-8">
        <span className="text-sky-500">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 hover:bg-gray-800/50 transition-all"
          >
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-400 text-sm font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
