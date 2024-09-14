import React, { useEffect, useState } from 'react';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('/api/faqs')
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  return (
    <div>
      <h2>FAQ</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
