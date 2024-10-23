import React from 'react';
import profileImage from '../assets/profile.jpg'; // Adjust the path if necessary

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="my-10 p-10 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg shadow-lg text-white"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3">
          {/* Profile image */}
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto border-4 border-indigo-500 shadow-md transform scale-105">
            <img
              src={profileImage} // Use the imported image here
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="md:w-2/3 mt-6 md:mt-0 md:ml-10 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Hello! I'm <span className="text-blue-400">Satya Narayana</span>
          </h2>
          <p className="text-lg leading-relaxed">
            I am a passionate developer with expertise in web technologies, creating
            beautiful and functional web experiences...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
