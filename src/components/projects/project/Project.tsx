"use client";

import Badge from "@/components/ui/badge/Badge";
import Headline from "@/components/ui/headline/Headline";
import { ProjectData } from "@/types/project";
import Image from "next/image";

const Project = ({ title, imgSrc, description, link, tools }: ProjectData) => {
  return (
    <div className="group relative grid sm:grid-cols-8 gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 transition">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="sm:col-span-6 sm:order-2 z-10">
        <Headline isLink showLinkIcon href={link} className="text-slate-200">
          {title}
          <span className="hidden lg:block absolute -inset-x-4 -inset-y-2.5 inset-0 md:-inset-x-6 md:-inset-y-4 rounded-md" />
        </Headline>
        <p className="text-sm mt-2">{description}</p>
        <Badge>{tools}</Badge>
      </div>
      <Image src={imgSrc} alt={title} width={200} height={48} className="aspect-video object-cover sm:col-span-2 rounded border-2 border-slate-200/10 sm:order-1 z-10"/>
    </div>
  );
};

export default Project;
