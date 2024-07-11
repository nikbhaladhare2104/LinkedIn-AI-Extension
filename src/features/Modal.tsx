import { useEffect, useRef } from 'react';

const Modal = ({
  onClose,
  onGenerate,
  onInsert,
  generatedText,
  setGeneratedText
}: {
  onClose: () => void,
  onGenerate: () => void,
  onInsert: () => void,
  generatedText: string,
  setGeneratedText: (text: string) => void
}) => {
  const modalRef = useRef(null);

//   const handleOutsideClick = (event: MouseEvent) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

  useEffect(() => {
    // document.addEventListener('mousedown', handleOutsideClick);
    return () => {
    //   document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div ref={modalRef} className="bg-white p-4 rounded-md shadow-lg w-1/4">
        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="Enter your command"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 flex justify-end ">
          <button onClick={onGenerate} className="bg-blue-500 text-white px-4 py-2 rounded">
            Generate
          </button>
        </div>
        {generatedText && (
          <div className="mb-4 p-2 border border-gray-300 rounded">
            <img src="../../assets/generate-icon.svg" alt="Generate Icon" />
            {generatedText}
          </div>
        )}



        <div className="flex justify-end">
          <button onClick={onInsert} className="bg-green-500 text-white px-4 py-2 rounded">
            Insert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
