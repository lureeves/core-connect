import React, { useState } from 'react';

const TestCard = () => {
  const coreValues = [
    "Acheivement", "Discipline", "Generosity", "Knowledge", "Respect",
    "Adaptability", "Empathy", "Hard work", "Leadership", "Responsibility",
    "Collaboration", "Excitement", "Honesty", "Loyalty", "Security",
    "Compassionate", "Excellence", "Impact", "Passion", "Skill/Mastery",
    "Courage", "Flexibility", "Innovation", "Patience", "Trust",
    "Creativity", "Fairness", "Integrity", "Persistence", "Unity",
    "Curiosity", "Freedom", "Kindness", "Recognition", "Wisdom"
  ];

  const [selectedValues, setSelectedValues] = useState([]);

  const handleValueClick = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter(v => v !== value));
    } else if (selectedValues.length < 10) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const handleSubmit = () => {
    console.log('Selected Values:', selectedValues);
    // Handle the submission logic here (e.g., saving the data or navigating to the next page)
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {coreValues.map(value => (
          <button
            key={value}
            style={{ 
              padding: '10px', 
              backgroundColor: selectedValues.includes(value) ? 'lightblue' : 'lightgray' 
            }}
            onClick={() => handleValueClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit} style={{ marginTop: '20px' }}>Next</button>
    </div>
  );
};

export default TestCard;
