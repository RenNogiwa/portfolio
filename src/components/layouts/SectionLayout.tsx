import React from 'react';

interface SectionLayoutProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      {children}
    </section>
  );
}; 