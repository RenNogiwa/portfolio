import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, X } from 'lucide-react';
import type { Project } from './types/Project';
import profileImage from './assets/Profile_Image.JPG';

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
        link: 'https://github.com/RenNogiwa/portfolio'
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
        link: 'https://github.com/RenNogiwa/ec-platform'
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
        link: 'https://github.com/RenNogiwa/responsive-website'
      }
    }
  ];

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
            <a href="https://linkedin.com/in/rennogiwa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-600 hover:text-black">
              <Mail size={24} />
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
              <div 
                key={project.title} 
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
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
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              送信する
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 border-t">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/RenNogiwa" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/rennogiwa" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="hover:text-black">
            <Mail size={20} />
          </a>
        </div>
        <p>© 2024 REN NOGIWA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;