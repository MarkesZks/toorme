import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import type { Feedback } from "../../models/Feedback";

const FeedbackCarousel = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 32 },
      },
    },
  });

  // Simulando requisição de API
  useEffect(() => {
    const fetchFeedbacks = async () => {
      // Simulação de requisição
      /*const response = await fetch("https://feedbacks");
        const data = await response.json();
        setFeedbacks(data);*/

      const response = await new Promise<Feedback[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: "Sarah M.",
              text: "ToorMe made my trip to Italy unforgettable!",
              image: "/public/imagem.png",
              rating: 5,
            },
            {
              id: 2,
              name: "David L.",
              text: "I found the perfect guide for my hiking adventure.",
              image: "/public/imagem.png",
              rating: 5,
            },
            {
              id: 3,
              name: "Luana R.",
              text: "Amazing service! The app helped me discover hidden gems.",
              image: "/public/imagem.png",
              rating: 4,
            },
          ]);
        }, 1000); // delay simulado
      });

      setFeedbacks(response);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="feedback-carousel">
      <h2 className="section-title">Feedbacks</h2>
      <div ref={sliderRef} className="keen-slider">
        {feedbacks.map((item) => (
          <div key={item.id} className="keen-slider__slide feedback-card">
            <img src={item.image} alt={item.name} className="feedback-image" />
            <div className="feedback-info">
              <div className="feedback-rating">
                {"★".repeat(item.rating)} {"☆".repeat(5 - item.rating)}
              </div>
              <h4 className="feedback-name">{item.name}</h4>
              <p className="feedback-text">"{item.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackCarousel;
