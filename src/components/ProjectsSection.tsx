import React from 'react';
import type { Project } from '../types/Project';
import { ProjectCard } from './ProjectCard';
import { SECTIONS } from '../constants/sections';
import { SectionLayout } from './layouts/SectionLayout';

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onProjectClick }) => {
  return (
    <SectionLayout id={SECTIONS.PROJECTS.id}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">{SECTIONS.PROJECTS.title}</h2>
        <p className="text-gray-600 text-center mb-8">{SECTIONS.PROJECTS.subtitle}</p>
        <div className="flex overflow-x-auto gap-8 pb-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}; 