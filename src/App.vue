<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    
    <main class="container mx-auto px-4 py-8">
      <!-- Hero Section -->
      <section id="hero" class="py-20 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h1>
        <p class="text-xl text-gray-600 mb-8">I'm a passionate developer creating amazing web experiences</p>
        <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get in Touch
        </a>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <p class="text-gray-600 mb-4">
              私は、Web開発に情熱を持つエンジニアです。最新のテクノロジーを活用して、
              ユーザー体験を重視したアプリケーションの開発に取り組んでいます。
            </p>
            <p class="text-gray-600">
              主なスキル：
            </p>
            <ul class="list-disc list-inside text-gray-600 mt-2">
              <li>Vue.js / React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Git</li>
            </ul>
          </div>
          <div class="bg-gray-200 rounded-lg h-64"></div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-gray-200 h-48"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech" 
                      class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Contact Me</h2>
        <div class="max-w-lg mx-auto">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" 
                     class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" 
                     class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" 
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" 
                    class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with Vue.js and Tailwind CSS.',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Project 3',
    description: 'A mobile-first responsive website for a local business.',
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
]
</script> 