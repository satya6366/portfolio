import React from 'react';

const Academics = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Engineering (BE)",
      college: "Dayananda Sagar College of Engineering",
      cgpa: "8.5",
      year: "2020 - 2024",
    },
  ];

  return (
    <section id="academics" className="p-8 bg-gray-900">
      <h2 className="text-4xl font-bold mb-4 text-center text-white">Academics</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {educationDetails.map((education, index) => (
          <div key={index} className="text-white">
            <h3 className="text-2xl font-bold">{education.degree}</h3>
            <p className="text-xl mt-2">{education.college}</p>
            <p className="text-lg mt-1">CGPA: {education.cgpa}</p>
            <p className="text-md mt-1">{education.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academics;
