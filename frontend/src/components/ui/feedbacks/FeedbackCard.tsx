import React from "react";
import "./FeedbackCarousel.scss";

interface FeedbackCardProps {
  avatar: string;
  name: string;
  comment: string;
  rating?: number;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ avatar, name, comment, rating = 5 }) => {
  return (
    <div className="feedback-card">
      <img src={avatar} alt={name} className="avatar" />
      <div className="feedback-rating">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
      <p className="feedback-name">{name}</p>
      <p className="feedback-comment">"{comment}"</p>
    </div>
  );
};

export default FeedbackCard;