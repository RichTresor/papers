import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const ButtonFacebook: React.FC = () => {
  return (
    <button className="w-full py-2 bg-blue-800 text-white rounded-lg flex items-center justify-center hover:bg-c9">
      <FontAwesomeIcon icon={faFacebook} className="mr-2" />
      Se connecter avec Facebook
    </button>
  );
};

export default ButtonFacebook;
