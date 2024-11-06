import React from 'react';

const Modal = ({ isOpen, onClose, total }) => {
  if (!isOpen) return null; // Return null if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal-box rounded-lg text-center p-6 bg-white shadow-lg w-96">

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-2">Payment Successfully</h2>
        <p className="text-gray-500 mb-4">
          Thanks for purchasing!<br />
          Total: ${total}
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
