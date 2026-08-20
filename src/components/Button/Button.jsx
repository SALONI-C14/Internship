import React from 'react';
import './Button.css';

function Button({ children, onClick, type = 'button', disabled = false, variant = 'primary', size = 'medium' }) {
  return <button className={`button button--${variant} button--${size}`} type={type} onClick={onClick} disabled={disabled}>{children}</button>;
}

export default Button;
