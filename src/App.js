import React from 'react';
import Introduction from './components/Introduction';
import Academics from './components/Academics';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-3xl font-bold">Satya Narayana P</h1>
        <p className="text-lg"></p>
      </header>
      <nav className="bg-gray-700 p-4 flex justify-center space-x-6">
        <a href="#introduction" className="hover:text-blue-400">Home</a>
        <a href="#academics" className="hover:text-blue-400">About</a>
        <a href="#experience" className="hover:text-blue-400">Experience</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </nav>
      <main className="max-w-6xl mx-auto px-4">
        <Introduction />
        <Academics />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <footer className="bg-gray-800 text-center p-4 mt-10">
        <p>&copy; Satya narayana P. 2024 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
