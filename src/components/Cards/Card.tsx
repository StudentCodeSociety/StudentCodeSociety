import React from 'react';
import styles from '@components/Cards/Card.module.scss';
import { Button } from '@components/UI/Button';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonLabels: string[];
  isLoading?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  buttonLabels,
  isLoading = false,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt='Card Image'
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          {description}
        </p>
        <div className={styles.buttons}>
          {buttonLabels.map((label, index) => (
            <Button
              key={index}
              title={label}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card;
