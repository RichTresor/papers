import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const ButtonGoogle: React.FC = () => {
  return (
    <button className="w-full py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-c9">
      <FontAwesomeIcon icon={faGoogle} className="mr-2" />
      Connectez-vous avec Google
    </button>
  );
};

export default ButtonGoogle;
