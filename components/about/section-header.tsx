"use client";

import { Icon } from "@iconify/react";
import { SectionHeaderProps } from "@/components/about/types";

export const SectionHeader = ({
  icon,
  title,
  className = "",
}: SectionHeaderProps) => (
  <div className={`flex items-center gap-3 mb-6 ${className}`}>
    <div className="bg-pink-100 dark:bg-pink-900/30 text-pink-400 p-2 rounded-full">
      <Icon className="text-xl" icon={icon} />
    </div>
    
    <h2 className="text-2xl font-bold text-pink-400">{title}</h2>
  </div>
);