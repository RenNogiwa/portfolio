import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, X, BarChart3, Database, LineChart, Code2 } from 'lucide-react';
import Header from './components/Header';
import type { Project } from './types/Project';

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

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    {
      name: 'Google Analytics',
      level: 'Advanced',
      icon: LineChart,
      description: 'ウェブ解析・マーケティング分析',
      iconColor: 'text-orange-600'
    },
    {
      name: 'SQL',
      level: 'Advanced',
      icon: Database,
      description: 'データベース設計・クエリ最適化',
      iconColor: 'text-blue-600'
    },
    {
      name: 'Python',
      level: 'Advanced',
      icon: Code2,
      description: 'データ分析・機械学習',
      iconColor: 'text-yellow-600'
    },
    {
      name: 'Tableau',
      level: 'Advanced',
      icon: BarChart3,
      description: 'ビジュアライゼーション・ダッシュボード作成',
      iconColor: 'text-green-600'
    }
  ];

  const projects: Project[] = [
    {
      title: 'ポートフォリオウェブサイト',
      description: 'Reactとモダンなテクノロジーを使用した個人ポートフォリオサイト',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
      details: {
        overview: 'モダンなWeb技術を活用し、レスポンシブで高パフォーマンスな個人ポートフォリオサイトを開発しました。',
        features: [
          'レスポンシブデザイン',
          'ダークモード対応',
          'アニメーションエフェクト',
          'コンタクトフォーム機能'
        ],
        impact: 'ウェブサイトのパフォーマンススコアが95%を達成し、モバイルでの使用性を大幅に向上させました。',
        link: 'https://example.com/portfolio'
      }
    },
    {
      title: 'ECサイトプラットフォーム',
      description: 'リアルタイム在庫管理機能を備えたECサイト',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
      details: {
        overview: '小規模ビジネス向けのカスタマイズ可能なECプラットフォームを開発しました。',
        features: [
          'リアルタイム在庫管理',
          '決済システム統合',
          '注文管理ダッシュボード',
          'カスタマーサポート機能'
        ],
        impact: '導入企業の売上が平均30%増加し、運営コストを20%削減することに成功しました。',
        link: 'https://example.com/ec-platform'
      }
    },
    {
      title: 'レスポンシブウェブサイト',
      description: '地域ビジネス向けのモバイルファーストウェブサイト',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=60',
      details: {
        overview: '地域の小規模ビジネス向けに、モバイルファーストアプローチでウェブサイトを開発しました。',
        features: [
          'モバイルファーストデザイン',
          'SEO最適化',
          'パフォーマンス最適化',
          'SNS統合'
        ],
        impact: 'モバイルからのアクセスが50%増加し、コンバージョン率が25%向上しました。',
        link: 'https://example.com/responsive-website'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="hero" className="py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8">I'm a passionate developer creating amazing web experiences</p>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get in Touch
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                私は、Web開発に情熱を持つエンジニアです。最新のテクノロジーを活用して、
                ユーザー体験を重視したアプリケーションの開発に取り組んでいます。
              </p>
              <p className="text-gray-600">
                主なスキル：
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>React / Vue.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg h-64"></div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">概要</h3>
                    <p className="text-gray-700">{selectedProject.details.overview}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">主な機能</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">成果</h3>
                    <p className="text-gray-700">{selectedProject.details.impact}</p>
                  </div>
                  {selectedProject.details.link && (
                    <div className="pt-4">
                      <a 
                        href={selectedProject.details.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        プロジェクトを見る <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button type="submit" 
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;