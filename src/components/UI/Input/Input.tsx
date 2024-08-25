import React from 'react';
import styles from '@components/UI/Input/Input.module.scss';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  customClass?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  placeholder = '',
  value,
  onChange,
  variant = 'primary',
  size = 'medium',
  customClass = '',
  isLoading = false,
  isError = false,
  errorMessage = '',
  disabled = false,
}) => {
  const classes = `
    ${styles.inputWrapper} 
    ${styles[`input--${variant}`]} 
    ${styles[`input--${size}`]} 
    ${isError ? styles['input--error'] : ''} 
    ${isLoading ? styles['input--loading'] : ''} 
    ${disabled ? styles['input--disabled'] : ''} 
    ${customClass}
  `;

  return (
    <div className={classes}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isLoading || disabled}
          className={styles.input}
        />
        {isLoading && <span className={styles.loader}></span>}
      </div>
      {isError && errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
