import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Wisework",
      role: "Software Developer Intern",
      duration: "12/2023 - 06/2024",
      responsibilities: [
        "Contributed to the development of Hue Chip - RAG LLM, an educational chatbot utilizing Retrieval Augmented Generation (RAG) and Large Language Models (LLM).",
        "Implemented RAG classification to enhance query analysis and categorization, improving the chatbot's contextual understanding.",
        "Worked on speech-to-text and text-to-speech modules, integrating live audio input for real-time interaction and pre-recorded audio for controlled testing.",
      ],
    },
  ];

  return (
    <section id="experience" className="my-10 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">Experience</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {experiences.map((experience, index) => (
          <div key={index} className="text-white mb-6">
            <h3 className="text-2xl font-semibold">{experience.role}</h3>
            <p className="text-xl mt-1">{experience.company}</p>
            <p className="text-md text-gray-400 mt-1">{experience.duration}</p>
            <ul className="mt-4 list-disc list-inside text-gray-300">
              {experience.responsibilities.map((item, idx) => (
                <li key={idx} className="mt-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
