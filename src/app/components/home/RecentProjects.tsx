"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Persona AI",
    description:
      "Persona AI is a web application for creating AI personas that can interact with audiences via voice, text, and other mediums, offering a new level of personalized digital engagement.",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://persona-ai-delta.vercel.app/",
  },
  {
    id: 2,
    title: "Inner Monologue Journal",
    description:
      "A minimalist journal app where users can record their thoughts as they come.",
    tags: ["React", "Next.js", "TailwindCSS"],
    link: "https://inner-monologue-journal.vercel.app/",
  },
  // Add more projects here
];

export default function RecentProjects() {
  return (
    <section className="w-full max-w-4xl py-12 px-5">
      <div className="mx-auto">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <span className="mr-2 text-sky-500">RECENT PROJECTS</span>
          <div className="h-px bg-gray-700 flex-grow"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border border-gray-700 bg-gray-800 hover:bg-gray-750 transition-colors duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-sky-900/30 text-sky-300 border-sky-700 hover:bg-sky-800/40"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-4">
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects" passHref>
            <Button
              variant="ghost"
              className="text-sky-400 hover:text-sky-300 hover:bg-sky-950/30 group"
            >
              View more projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
