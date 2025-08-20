import React, { useRef } from 'react';
import modalImg from '../../assets/modal.svg';

const UpgradeThankYouModal = ({ onClose }) => {
  const modalRef = useRef();

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose(); 
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-black rounded-lg shadow-lg w-[400px] overflow-hidden"
      >
        {/* Top Illustration */}
        <div className="bg-gray-800 p-4">
          <img
            src={modalImg}
            alt="Thank you illustration"
            className="w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="text-center px-6 py-8">
          <h2 className="text-white text-4xl font-extrabold font-[Figtree] mb-4">Thankyou!</h2>
          <p className="text-gray-300 text-base mb-6">
            We have received your upgrade request.<br />
            We will reach out to you soon!
          </p>
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeThankYouModal;
