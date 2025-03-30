import React, { useState } from 'react';
import type { Project } from './types/Project';
import { projects } from './data/projects';
import { ProjectModal } from './components/ProjectModal';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection 
        projects={projects}
        onProjectClick={setSelectedProject}
      />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;