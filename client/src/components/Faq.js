// import React, { useEffect, useState } from 'react';

// const Faq = () => {
//   const [faqs, setFaqs] = useState([]);

//   useEffect(() => {
//     fetch('/api/faqs')
//       .then((res) => res.json())
//       .then((data) => setFaqs(data));
//   }, []);

//   return (
//     <div>
//       <h2>FAQ</h2>
//       <ul>
//         {faqs.map((faq) => (
//           <li key={faq._id}>
//             <h3>{faq.question}</h3>
//             <p>{faq.answer}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Faq;
import React, { useState, useEffect } from 'react';
import './Faq.css'; // Optional: Include CSS for styling

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswer, setNewAnswer] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editQuestion, setEditQuestion] = useState('');
    const [editAnswer, setEditAnswer] = useState('');

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await fetch('/faqs.json'); // Ensure this path is correct
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFaqs(data.faqs);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    const toggleAnswer = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) =>
                i === index ? { ...faq, isOpen: !faq.isOpen } : faq
            )
        );
    };

    const handleAdd = () => {
        if (newQuestion && newAnswer) {
            setFaqs([...faqs, { question: newQuestion, answer: newAnswer }]);
            setNewQuestion('');
            setNewAnswer('');
        }
    };

    const handleDelete = (index) => {
        setFaqs(faqs.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditQuestion(faqs[index].question);
        setEditAnswer(faqs[index].answer);
    };

    const handleUpdate = () => {
        if (editQuestion && editAnswer !== undefined) {
            const updatedFaqs = faqs.map((faq, i) =>
                i === editIndex ? { question: editQuestion, answer: editAnswer } : faq
            );
            setFaqs(updatedFaqs);
            setEditIndex(null);
            setEditQuestion('');
            setEditAnswer('');
        }
    };

    if (loading) return <div>Loading FAQs...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleAnswer(index)}>
                        <strong>{faq.question}</strong>
                    </div>
                    {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}

            <h3>Add New FAQ</h3>
            <input
                type="text"
                placeholder="Question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
            />
            <input
                type="text"
                placeholder="Answer"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
            />
            <button onClick={handleAdd}>Add FAQ</button>

            {editIndex !== null && (
                <div>
                    <h3>Edit FAQ</h3>
                    <input
                        type="text"
                        placeholder="Question"
                        value={editQuestion}
                        onChange={(e) => setEditQuestion(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Answer"
                        value={editAnswer}
                        onChange={(e) => setEditAnswer(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update FAQ</button>
                </div>
            )}
        </div>
    );
};

export default FAQ;
