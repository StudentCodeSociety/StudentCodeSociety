import React from 'react'
import styles from './Button.module.scss';

interface Button {
  title?: string;
  onClick?: () => void;
  customClass?: string;
}

const Button: React.FC<Button> = ({ title = 'Read More', onClick, customClass }) => {
  return (
    <button className={`${customClass} button`} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button