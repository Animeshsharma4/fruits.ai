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
// import React, { useState, useEffect } from 'react';
// import './Faq.css'; // Optional: Include CSS for styling

// const FAQ = () => {
//     const [faqs, setFaqs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newQuestion, setNewQuestion] = useState('');
//     const [newAnswer, setNewAnswer] = useState('');
//     const [editIndex, setEditIndex] = useState(null);
//     const [editQuestion, setEditQuestion] = useState('');
//     const [editAnswer, setEditAnswer] = useState('');

//     useEffect(() => {
//         const fetchFAQs = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/faqs');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch FAQs');
//                 }
                
//                 const data = await response.json();
//                 console.log(data);
//                 setFaqs(data); // Ensure the response shape is an array
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchFAQs();
//     }, []);

//     const toggleAnswer = (index) => {
//         setFaqs((prevFaqs) =>
//             prevFaqs.map((faq, i) =>
//                 i === index ? { ...faq, isOpen: !faq.isOpen } : faq
//             )
//         );
//     };

//     const handleAdd = async () => {
//         if (!newQuestion || !newAnswer) {
//             alert('Please fill both question and answer');
//             return;
//         }
//         const newFaq = { question: newQuestion, answer: newAnswer };

//         try {
//             const response = await fetch('http://localhost:5000/api/faqs', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newFaq),
//             });
//             const addedFaq = await response.json();
//             setFaqs([...faqs, addedFaq]);
//             setNewQuestion('');
//             setNewAnswer('');
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     const handleDelete = async (index) => {
//         const faqToDelete = faqs[index];

//         try {
//             await fetch(`http://localhost:5000/api/faqs/${faqToDelete._id}`, {
//                 method: 'DELETE',
//             });
//             setFaqs(faqs.filter((_, i) => i !== index));
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     const handleEdit = (index) => {
//         const faqToEdit = faqs[index];
//         setEditIndex(index);
//         setEditQuestion(faqToEdit.question);
//         setEditAnswer(faqToEdit.answer);
//     };

//     const handleUpdate = async () => {
//         if (!editQuestion || !editAnswer) {
//             alert('Please fill both question and answer');
//             return;
//         }

//         const updatedFaq = { question: editQuestion, answer: editAnswer };

//         try {
//             const response = await fetch(`http://localhost:5000/api/faqs/${faqs[editIndex]._id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updatedFaq),
//             });
//             const updatedData = await response.json();

//             const updatedFaqs = faqs.map((faq, i) =>
//                 i === editIndex ? updatedData : faq
//             );
//             setFaqs(updatedFaqs);
//             setEditIndex(null);
//             setEditQuestion('');
//             setEditAnswer('');
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     if (loading) return <div>Loading FAQs...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="faq-container">
//             <h2>Frequently Asked Questions</h2>
//             {faqs.map((faq, index) => (
//                 <div key={index} className="faq-item">
//                     <div className="faq-question" onClick={() => toggleAnswer(index)}>
//                         <strong>{faq.question}</strong>
//                     </div>
//                     {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
//                     <button onClick={() => handleEdit(index)}>Edit</button>
//                     <button onClick={() => handleDelete(index)}>Delete</button>
//                 </div>
//             ))}

//             <div className="add-faq">
//                 <h3>Add New FAQ</h3>
//                 <input
//                     type="text"
//                     placeholder="Question"
//                     value={newQuestion}
//                     onChange={(e) => setNewQuestion(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Answer"
//                     value={newAnswer}
//                     onChange={(e) => setNewAnswer(e.target.value)}
//                 />
//                 <button onClick={handleAdd}>Add FAQ</button>
//             </div>

//             {editIndex !== null && (
//                 <div className="edit-faq">
//                     <h3>Edit FAQ</h3>
//                     <input
//                         type="text"
//                         placeholder="Edit Question"
//                         value={editQuestion}
//                         onChange={(e) => setEditQuestion(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Edit Answer"
//                         value={editAnswer}
//                         onChange={(e) => setEditAnswer(e.target.value)}
//                     />
//                     <button onClick={handleUpdate}>Update FAQ</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FAQ;
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
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
                const response = await axios.get('http://localhost:5000/api/faqs');
                setFaqs(response.data); // Ensure the response shape is an array
            } catch (err) {
                setError(err.message);
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

    const handleAdd = async () => {
        if (!newQuestion || !newAnswer) {
            alert('Please fill both question and answer');
            return;
        }
        const newFaq = { question: newQuestion, answer: newAnswer };

        try {
            const response = await axios.post('http://localhost:5000/api/faqs', newFaq);
            setFaqs([...faqs, response.data]);
            setNewQuestion('');
            setNewAnswer('');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDelete = async (index) => {
        const faqToDelete = faqs[index];

        try {
            const response = await axios.delete(`http://localhost:5000/api/faqs/${faqToDelete._id}`);
            setFaqs(response.data);
        } catch (err) {
            setError("delete operation not working");
        }
    };

    const handleEdit = (index) => {
        const faqToEdit = faqs[index];
        setEditIndex(index);
        setEditQuestion(faqToEdit.question);
        setEditAnswer(faqToEdit.answer);
    };

    const handleUpdate = async () => {
        if (!editQuestion || !editAnswer) {
            alert('Please fill both question and answer');
            return;
        }

        const updatedFaq = { question: editQuestion, answer: editAnswer };

        try {
            const response = await axios.put(`http://localhost:5000/api/faqs/${faqs[editIndex]._id}`, updatedFaq);
            const updatedData = response.data;

            const updatedFaqs = faqs.map((faq, i) =>
                i === editIndex ? updatedData : faq
            );
            setFaqs(updatedFaqs);
            setEditIndex(null);
            setEditQuestion('');
            setEditAnswer('');
        } catch (err) {
            setError(err.message);
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

            <div className="add-faq">
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
            </div>

            {editIndex !== null && (
                <div className="edit-faq">
                    <h3>Edit FAQ</h3>
                    <input
                        type="text"
                        placeholder="Edit Question"
                        value={editQuestion}
                        onChange={(e) => setEditQuestion(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Edit Answer"
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
