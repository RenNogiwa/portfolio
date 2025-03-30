import React from 'react';
import { Github, Linkedin, BarChart3, ChevronDown } from 'lucide-react';
import profileImage from '../assets/Profile_Image.JPG';
import { SOCIAL_LINKS } from '../constants/socialLinks';
import { SECTIONS } from '../constants/sections';
import { SectionLayout } from './layouts/SectionLayout';

const iconMap = {
  Github,
  Linkedin,
  BarChart3
} as const;

export const HeroSection: React.FC = () => {
  return (
    <SectionLayout className="relative h-screen flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center 30%"
            }}
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">{SECTIONS.HERO.title}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{SECTIONS.HERO.subtitle}</h2>
        <div className="flex justify-center gap-4 mb-6">
          {SOCIAL_LINKS.map(({ name, url, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
      <a 
        href={`#${SECTIONS.ABOUT.id}`}
        className="absolute bottom-8 animate-bounce cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(SECTIONS.ABOUT.id)?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={32} className="text-gray-400" />
      </a>
    </SectionLayout>
  );
}; 