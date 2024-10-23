"use client"; // Ensure it's a client-side component

import React, { useState } from 'react';

const ToggleDetails: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
        onClick={toggleModal}
      >
        To know more
      </button>

      {showModal && (
        <>
          {/* Modal Overlay */}
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
            onClick={toggleModal}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-xl font-semibold text-neutral-800 mb-4">
                Additional Information
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed tracking-wide">
                You can include details about relevant courses, research projects, and honors obtained during your studies.
                For example, you may highlight key projects or specializations that directly relate to your current role or future aspirations.
              </p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ToggleDetails;
