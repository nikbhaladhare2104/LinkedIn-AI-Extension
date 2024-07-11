import React, { useState, useEffect } from 'react';
import AIIcon from './AIIcon';
import Modal from './Modal';

const Overlay = () => {
  const [showIcon, setShowIcon] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const handleFocus = () => setShowIcon(true);
  const handleBlur = () => setShowIcon(false);
  const handleIconClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleGenerateClick = () => {
    setGeneratedText('Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.');
  };

  const handleInsertClick = () => {
    const inputField = document.querySelector('.msg-form__contenteditable[role="textbox"]');

    if (inputField) {
      const paragraph = inputField.querySelector('p');
      if (paragraph) {
        paragraph.textContent = generatedText;
      } else {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = generatedText;
        inputField.appendChild(newParagraph);
      }
    }
    setShowModal(false);
  };


  // useEffect(() => {
  //   const messageInputField = document.querySelector('.msg-form__contenteditable[role="textbox"]');
  //   if (messageInputField) {
  //     // Create the new div element
  //     const newDiv = document.createElement('div');
  //     newDiv.className = 'fixed z-50';
  //     newDiv.style.bottom = '16px';
  //     newDiv.style.right = '16px';

  //     messageInputField.appendChild(newDiv);

  //     // Render the AIIcon component into the new div
  //     ReactDOM.render(<AIIcon onClick={handleIconClick} />, newDiv);

  //   }
  // },[])

   useEffect(() => {
    const messageInputField = document.querySelector('.msg-form__contenteditable[role="textbox"]');

    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-artdeco-is-focused') {
          const isFocused = messageInputField.getAttribute('data-artdeco-is-focused') === 'true';           
          console.log('data-artdeco-is-focused changed:', isFocused);

          setShowIcon(isFocused);
        }
      }
    });

    if (messageInputField) {
      observer.observe(messageInputField, {
        attributes: true // Watch for attribute changes
      });
    }

    return () => {
      if (messageInputField) {
        observer.disconnect();
      }
    };
  }, []);


  console.log(showIcon, showModal)
  return (
    <>
      {showIcon && (
        <div className="fixed z-50" style={{ bottom: '16px', right: '16px' }}>
          <AIIcon onClick={handleIconClick} />
        </div>
      )}
      {showModal && (
        <Modal
          onClose={handleModalClose}
          onGenerate={handleGenerateClick}
          onInsert={handleInsertClick}
          generatedText={generatedText}
          setGeneratedText={setGeneratedText}
        />
      )}
    </>
  );
};

export default Overlay;
