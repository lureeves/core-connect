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
    className={`my-3 p-1 g-white border-2 border-[#D7E0FF] shadow-[#D7E0FF_0px_0px_4px] hover:scale-[1.04] ${isSelected ? 'bg-[#D7E0FF]' : 'bg-white'}`}
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
      buttonClass = 'mt-16 py-2 px-9 rounded-3xl text-[#3A2A9B] font-semibold hover:scale-[1.04] border-2 border-[#3A2A9B] bg-white';
      break;
    case 'next':
      buttonText = 'Next';
      buttonClass = `mt-16 py-2 px-9 rounded-3xl text-white hover:scale-[1.04] float-right ${isEnabled ? 'bg-[#3A2A9B]' : 'bg-[#B9BBC3]'}`;
      break;
    case 'submit':
      buttonText = 'Submit';
      buttonClass = `mt-16 py-2 px-9 rounded-3xl text-white hover:scale-[1.04] float-right ${isEnabled ? 'bg-[#3A2A9B]' : 'bg-[#B9BBC3]'}`;
      break;
    case 'start':
      buttonText = 'Start Test';
      buttonClass = `flex-shrink-0 w-[13.8125rem] h-[3.125rem] rounded-[25px] bg-[#3a2a9b] text-white hover:scale-[1.04] justify-center items-center`;
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
