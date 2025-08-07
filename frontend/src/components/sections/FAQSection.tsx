import React, { useState } from "react";


const faqs = [
  {
    question: "Preciso pagar para usar?",
    answer:
      "Você pode explorar serviços e montar roteiros personalizados gratuitamente. Só há cobrança ao contratar um serviço, e os preços são sempre exibidos antes da confirmação da reserva.",
  },
  {
    question: "Como são escolhidos os prestadores?",
    answer:
      "Os prestadores são avaliados com base em avaliações, certificações e histórico de qualidade. Selecionamos apenas os melhores parceiros.",
  },
  {
    question: "Posso cancelar uma reserva?",
    answer:
      "Sim, é possível cancelar reservas conforme nossa política de cancelamento. Os detalhes variam de acordo com o serviço contratado.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2>Perguntas frequentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => ( 
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;