import React from 'react';
import './button.scss';

type DownloadButtonProps = {
  label: string;
  variant: 'orange' | 'blue';
  onClick?: () => void;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ label, variant, onClick }) => {
  return (
    <button
      className={`download-btn ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default DownloadButton;