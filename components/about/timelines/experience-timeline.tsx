"use client";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/about/section-header";
import { TimelineItem } from "@/components/about/timelines/timeline-item";
import { containerVariants, itemVariants } from "@/components/about/variants";
import { ExperienceItems } from "@/components/about/types";

interface ExperienceTimelineProps {
  experience: ExperienceItems;
}

export const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => (
  <div className="mb-24">
    {/* UPDATED: Briefcase icon matches the pastel pink theme */}
    <SectionHeader 
      icon="mdi:briefcase-outline" 
      title="Experience" 
      className="text-pink-400" 
    />

    <motion.ol
      className="relative ml-6"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      {/* UPDATED: Vertical timeline line changed from primary-500 to pink-400 */}
      <div className="absolute top-2 left-2 bottom-0 w-px bg-pink-400" />
      
      {experience.map((item, idx) => (
        <TimelineItem
          key={idx}
          date={item.date}
          delay={idx * 300}
          description={item.description}
          title={item.title}
          variants={itemVariants}
        />
      ))}
    </motion.ol>
  </div>
);