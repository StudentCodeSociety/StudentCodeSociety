import React from 'react';
import styles from './Description.module.scss';

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <p className={styles.description}>{description}</p>
  );
};

export default Description;
