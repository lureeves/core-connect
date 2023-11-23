import React from 'react';

/**
 * CoreValueButton Component
 * 
 * This component renders a button for a core value. 
 * It visually indicates whether the value is selected.
 * 
 * Props:
 * - value (string): The text to be displayed on the button.
 * - isSelected (boolean): Determines if the button is in a selected state.
 * - onClick (function): The function to call when the button is clicked.
 */
export const CoreValueButton = ({ value, isSelected, onClick }) => (
  <button
    className={`p-1 w-[164px] h-[43px] text-[17px] font-semibold g-white border-[3px] border-[#D7E0FF] shadow-[0_0px_9px_0px_rgba(0,0,0,0.10)] rounded-[15px] hover:scale-[1.04] ${isSelected ? 'bg-[#D7E0FF]' : 'bg-white'}`}
    style={{ borderRadius: '15px' }}
    onClick={() => onClick(value)}
  >
    {value}
  </button>
);

/**
 * ActionButton Component
 * 
 * This component renders a button for various actions like 'Back', 'Next', or 'Submit'.
 * The appearance and behavior of the button change based on the provided type.
 * 
 * Props:
 * - type (string): Determines the type of action button ('back', 'next', 'submit').
 * - onClick (function): The function to call when the button is clicked.
 * - isEnabled (boolean): If true, the button is clickable and styled accordingly.
 */
export const ActionButton = ({ type, onClick, isEnabled }) => {
  let buttonText, buttonClass;

  switch (type) {
    case 'back':
      buttonText = 'Back';
      buttonClass = 'ml-[92px] w-[120px] h-[43px] rounded-3xl text-[#3A2A9B] font-bold hover:scale-[1.04] border-[2px] border-[#3A2A9B] bg-white';
      break;
    case 'next':
      buttonText = 'Next';
      buttonClass = `mr-[92px] w-[120px] h-[43px] rounded-3xl text-white font-semibold hover:scale-[1.04] float-right ${isEnabled ? 'bg-[#3A2A9B]' : 'bg-[#6F789A]'}`;
      break;
    case 'submit':
      buttonText = 'Submit';
      buttonClass = `mr-[92px] w-[120px] h-[43px] rounded-[10px] text-white font-semibold hover:scale-[1.04] float-right ${isEnabled ? 'bg-[#3A2A9B]' : 'bg-[#6F789A]'}`;
      break;
    case 'start':
      buttonText = 'Start Test';
      buttonClass = `flex-shrink-0 w-[221px] h-[50px] rounded-[25px] bg-[#3a2a9b] text-white hover:scale-[1.04] justify-center items-center`;
      break;
    default:
      buttonText = 'Button';
      buttonClass = 'mt-16 py-2 px-9 rounded-3xl text-white hover:scale-[1.04] float-right bg-[#3A2A9B]';
  }

  return (
    <button
      onClick={isEnabled ? onClick : null}
      className={buttonClass}
    >
      {buttonText}
    </button>
  );
};
