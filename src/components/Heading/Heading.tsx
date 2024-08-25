// src/components/Heading/Heading.tsx
import React from 'react';
import styles from './Heading.module.scss';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'small';
  align?: 'left' | 'center' | 'right';
  uppercase?: boolean;
  children: React.ReactNode;
  customClass?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  variant = 'primary',
  align = 'left',
  uppercase = false,
  children,
  customClass = '',
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = `${styles.heading} ${styles[`heading--${variant}`]} ${styles[`heading--${align}`]} ${
    uppercase ? styles['heading--uppercase'] : ''
  } ${customClass}`;

  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;
