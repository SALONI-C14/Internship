import React from 'react';
import './Input.css';

function Input({ label, type = 'text', placeholder, value, onChange, name, required = false, error, disabled = false }) {
  const inputId = `input-${name}`;
  const errorId = `${inputId}-error`;
  return <div className="input-group"><label htmlFor={inputId}>{label} {required && <span aria-hidden="true">*</span>}</label><input id={inputId} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} disabled={disabled} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />{error && <p id={errorId} className="input-group__error" role="alert">{error}</p>}</div>;
}

export default Input;
