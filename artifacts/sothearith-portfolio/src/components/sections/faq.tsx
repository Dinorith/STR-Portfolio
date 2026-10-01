import React, { useState } from 'react';
import { faqs } from '@/data/skills-data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section wrap">
      <div className="section-kicker mono">06 / QUESTIONS</div>
      <div className="faq-wrap">
        <h2 className="display">
          YOU ASKED.<br />
          I ANSWERED.
        </h2>
        <div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                data-testid={`button-faq-${i}`}
              >
                <span>{faq.question}</span>
                <span className="plus">+</span>
              </button>
              {open === i && (
                <div className="faq-answer" id={`faq-answer-${i}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
