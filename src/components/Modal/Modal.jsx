import React, { useEffect, useRef } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, children }) {
  const closeButtonRef = useRef(null);
  useEffect(() => { if (!isOpen) return undefined; const handleKeyDown = (event) => { if (event.key === 'Escape') onClose(); }; document.addEventListener('keydown', handleKeyDown); closeButtonRef.current?.focus(); return () => document.removeEventListener('keydown', handleKeyDown); }, [isOpen, onClose]);
  if (!isOpen) return null;
  return <div className="modal-overlay" onMouseDown={onClose}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}><div className="modal__header"><h2 id="modal-title">{title}</h2><button ref={closeButtonRef} className="modal__close" type="button" onClick={onClose} aria-label="Close modal">×</button></div><div className="modal__body">{children}</div></section></div>;
}

export default Modal;
