"use client";

import { Calendar, Code, User, Briefcase, Users, Wrench, GraduationCap } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

// Transform your experience data into timeline format
const experienceTimelineData = [
  {
    id: 1,
    title: "IT Support Intern",
    date: "May 2023",
    content: "Repaired and maintained over 100 laptops for Palm Beach County School District serving 190,000 students. Provided technical support and troubleshooting assistance to staff and faculty.",
    category: "Internship",
    icon: Wrench,
    relatedIds: [2],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 2,
    title: "EWB Fundraising",
    date: "Oct 2023",
    content: "Coordinated on-campus fundraising events at Engineers Without Borders UF. Led development and implementation of fundraising strategies, raising over $300 for international engineering projects.",
    category: "Leadership",
    icon: Users,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "EWB Web Dev",
    date: "Jun 2024",
    content: "Focused on developing the frontend of the EWB website using React.js, CSS, HTML. Collaborated with team to improve site usability and design, aligning with growing organization needs.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 95,
  },
  {
    id: 4,
    title: "Teaching Fellow",
    date: "Jun 2024",
    content: "Teaching 6th grade students coding fundamentals using Scratch and LEGO robotics at Breakthrough Miami. Delivered cross-curricular instruction in mathematics, integrating technology with core subjects.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 100,
  },
  {
    id: 5,
    title: "Web Designer",
    date: "Oct 2025",
    content: "Designed and developed the official website for GUD's annual Design-A-Thon, a 24-hour UI/UX and product design event with 120+ participants. Created wireframes in Figma and implemented designs using Framer, ensuring responsive experience across desktop and mobile.",
    category: "Design",
    icon: Briefcase,
    relatedIds: [4],
    status: "in-progress" as const,
    energy: 75,
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience-timeline" className="relative">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Experience Journey</h2>
        <p className="text-white/70">Click on any node to explore my professional timeline</p>
      </div>
      <RadialOrbitalTimeline timelineData={experienceTimelineData} />
    </section>
  );
}

export default ExperienceTimeline;