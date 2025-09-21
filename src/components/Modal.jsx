import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[99999]   ">
      <div className="bg-white/35 backdrop-blur-md rounded-sm max-w-md w-full max-h-[60vh] overflow-y-auto shadow-2xl border border-white/20">
        <div className="p-6">
          <div className=" flex item-right ">
            {/* <h3 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {title}
            </h3> */}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-200/50 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
