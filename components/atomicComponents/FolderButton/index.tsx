import styles from './folderbutton.module.css';
import React, { ChangeEventHandler } from 'react';

interface FolderButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const FolderButton: React.FC<FolderButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default FolderButton;
