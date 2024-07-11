import React from 'react';

const AIIcon = ({ onClick }: { onClick: () => void }) => (
  <div
    onClick={onClick}
    className="fixed z-50 bottom-16 right-16 bg-blue-500 flex items-center justify-center p-2 rounded-full cursor-pointer"
  >
    <img src="../../assets/ai-icon.png" alt="AI-icon" className='h-8 w-8'/>
  </div>
);

export default AIIcon;
