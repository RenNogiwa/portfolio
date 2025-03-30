import React from 'react';
import { SECTIONS } from '../constants/sections';
import { SectionLayout } from './layouts/SectionLayout';

export const AboutSection: React.FC = () => {
  return (
    <SectionLayout id={SECTIONS.ABOUT.id} className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">{SECTIONS.ABOUT.title}</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        {SECTIONS.ABOUT.content}
      </p>
    </SectionLayout>
  );
}; 