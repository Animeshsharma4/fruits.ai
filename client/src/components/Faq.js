

// export default FAQ;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios
// // import './Faq.css'; // Optional: Include CSS for styling

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
//                 const response = await axios.get('fruits-ai-backend.vercel.app/api/faqs');
//                 setFaqs(response.data); // Ensure the response shape is an array
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
//             const response = await axios.post('fruits-ai-backend.vercel.app/api/faqs', newFaq);
//             setFaqs([...faqs, response.data]);
//             setNewQuestion('');
//             setNewAnswer('');
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     const handleDelete = async (index) => {
//         const faqToDelete = faqs[index];

//         try {
//             const response = await axios.delete(`fruits-ai-backend.vercel.app/api/faqs/${faqToDelete._id}`);
//             setFaqs(response.data);
//         } catch (err) {
//             setError("delete operation not working");
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
//             const response = await axios.put(`fruits-ai-backend.vercel.app/api/faqs/${faqs[editIndex]._id}`, updatedFaq);
//             const updatedData = response.data;

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
import { Link } from 'react-router-dom';
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
                const response = await axios.get('fruits-ai-backend.vercel.app/api/faqs');
                // Ensure each FAQ has an isOpen property
                const faqsWithOpenState = response.data.map(faq => ({ ...faq, isOpen: false }));
                setFaqs(faqsWithOpenState);
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
            const response = await axios.post('fruits-ai-backend.vercel.app/api/faqs', newFaq);
            setFaqs([...faqs, { ...response.data, isOpen: false }]); // Add isOpen property
            setNewQuestion('');
            setNewAnswer('');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDelete = async (index) => {
        const faqToDelete = faqs[index];

        try {
            await axios.delete(`fruits-ai-backend.vercel.app/api/faqs/${faqToDelete._id}`);
            setFaqs(faqs.filter((_, i) => i !== index)); // Remove the deleted FAQ
        } catch (err) {
            setError("Delete operation not working");
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
            const response = await axios.put(`fruits-ai-backend.vercel.app/api/faqs/${faqs[editIndex]._id}`, updatedFaq);
            const updatedData = { ...response.data, isOpen: false }; // Reset isOpen

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
                <div key={faq._id} className="faq-item"> {/* Use _id as the key */}
                    <div className="faq-question" onClick={() => toggleAnswer(index)}>
                        <strong>{faq.question}</strong>
                    </div>
                    {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
                    <div className='editdel'>
                    <button onClick={() => handleEdit(index) }>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button></div>
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
                id="getinput"
                    type="text"
                    placeholder="Answer"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                />
                <button onClick={handleAdd} className='add1'>Add FAQ</button>
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
                    id="getinput1"
                        type="text"
                        placeholder="Edit Answer"
                        value={editAnswer}
                        onChange={(e) => setEditAnswer(e.target.value)}
                    />
                    <button onClick={handleUpdate} className='add2'>Update FAQ</button>
                </div>
            )}

            <Link to="/home" className="home"><img src="https://th.bing.com/th/id/OIP.ZjWGBPoRd-zD8247yg5nAgHaHa?rs=1&pid=ImgDetMain" alt ="go to home page"></img></Link>
        </div>
        

    );
};

export default FAQ;
