import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../types/Project';
import { useScrollLock } from '../hooks/useScrollLock';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useScrollLock(true);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">概要</h3>
              <p className="text-gray-700">{project.details.overview}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">主な機能</h3>
              <ul className="list-disc list-inside text-gray-700">
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">成果</h3>
              <p className="text-gray-700">{project.details.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 