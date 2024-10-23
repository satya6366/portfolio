import React from 'react';

const Skills = () => {
  const skills = [
    "C++", "Python", "HTML", "CSS",
    "Bootstrap", "JavaScript", "SQL",
    "React.js", "Node.js", "TypeScript", "Git"
  ];

  return (
    <section id="skills" className="p-8 bg-gray-900">
      <h2 className="text-4xl font-bold mb-4 text-center">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-lg">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
