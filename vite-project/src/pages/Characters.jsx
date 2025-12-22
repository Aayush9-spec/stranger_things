import React from 'react';
import { motion } from 'framer-motion';
import './Characters.css';

const characters = [
  { id: 1, name: "Eleven", role: "Mage / Telekinetic" },
  { id: 2, name: "Mike Wheeler", role: "Paladin" },
  { id: 3, name: "Dustin Henderson", role: "Bard" },
  { id: 4, name: "Lucas Sinclair", role: "Ranger" },
  { id: 5, name: "Will Byers", role: "The Spy" },
  { id: 6, name: "Jim Hopper", role: "Chief of Police" },
  { id: 7, name: "Joyce Byers", role: "The Mom" },
  { id: 8, name: "Steve Harrington", role: "The Babysitter" },
];

const Characters = () => {
  return (
    <div className="characters-page">
      <motion.h1 
        className="char-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hawkins Residents
      </motion.h1>
      
      <div className="char-grid">
        {characters.map((char, index) => (
          <motion.div 
            key={char.id} 
            className="char-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="char-img-placeholder">
              {char.name.charAt(0)}
            </div>
            <div className="char-info">
              <h3>{char.name}</h3>
              <p>{char.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
