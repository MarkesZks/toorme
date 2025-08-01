import React from "react";
import FeedbackCard from "./FeedbackCard";

const FeedbackCarousel: React.FC = () => {
  return (
    <section className="feedback-section">
      <h2 className="feedback-title">Feedbacks</h2>
      <div className="feedback-carousel">
        <FeedbackCard
          avatar="/avatars/avatar1.jpg"
          name="Sarah M."
          comment="ToorMe made my trip to Italy unforgettable!"
        />
        <FeedbackCard
          avatar="/avatars/avatar2.jpg"
          name="David L."
          comment="I found the perfect guide for my hiking adventure."
        />
        <FeedbackCard
          avatar="/avatars/avatar3.jpg"
          name="Ana B."
          comment="Amazing support and great experiences!"
        />
      </div>
    </section>
  );
};

export default FeedbackCarousel;