"use client";

import SectionTitle from "@/components/sections/section-title/SectionTitle";
import Project from "../project/Project";
import { projects } from "@/data/projects";


const ProjectList = () => {

    return (
        <>
            <SectionTitle>Projets récents</SectionTitle>
            <ul className="group/list">
                {projects.map((project, index) => (
                    <li className="mb-12" key={index}>
                        <Project {...project}/>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProjectList;