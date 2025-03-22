import React, { useState } from 'react';
import { Github, Linkedin, BarChart3, ChevronDown } from 'lucide-react';
import type { Project } from './types/Project';
import profileImage from './assets/Profile_Image.JPG';
import { projects } from './data/projects';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
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
          <h1 className="text-4xl font-bold mb-2">REN NOGIWA</h1>
          <h2 className="text-xl text-gray-600 mb-4">Data Analyst | BI Developer</h2>
          <div className="flex justify-center gap-4 mb-6">
            <a href="https://github.com/RenNogiwa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ren-nogiwa-91039220b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Linkedin size={24} />
            </a>
            <a href="https://public.tableau.com/app/profile/ren3563/vizzes" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <BarChart3 size={24} />
            </a>
          </div>
        </div>
        <a 
          href="#about" 
          className="absolute bottom-8 animate-bounce cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown size={32} className="text-gray-400" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">自己紹介</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          ニューヨークを拠点とするデータアナリスト・BIデベロッパーとして、複雑なデータを実用的な洞察に変換することを専門としています。データ分析とビジュアライゼーションの分野で5年以上の経験を持ち、明確で効果的なダッシュボードを通じて、企業がデータに基づいた意思決定を行えるようサポートしています。
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">プロジェクト</h2>
          <p className="text-gray-600 text-center mb-8">データ分析とビジュアライゼーションの実績</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">お問い合わせ</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                お名前
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                メッセージ
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              送信
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;