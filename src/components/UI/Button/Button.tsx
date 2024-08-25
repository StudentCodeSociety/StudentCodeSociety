import React from 'react';
import styles from '@components/UI/Button/Button.module.scss';

interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  customClass?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  onClick,
  customClass,
  isLoading = false,
}) => {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${isLoading ? styles.loading : ''} ${customClass}`;

  return (
    <button className={classes} onClick={onClick} disabled={isLoading}>
      {isLoading && <span className={styles.spinner}></span>}
      {title}
    </button>
  );
};

export default Button;
