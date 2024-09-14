// // chat.js
// import React, { useState } from 'react';
// import './Chatbot.css';


// const Chat = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');

//     const handleSend = () => {
//         if (input.trim() === '') return;

//         const newMessage = {
//             text: input,
//             sender: 'user',
//         };

//         setMessages([...messages, newMessage]);
//         setInput('');

//         // Simulated bot response
//         setTimeout(() => {
//             const botResponse = {
//                 text: `You said: ${input}`,
//                 sender: 'bot',
//             };
//             setMessages(prevMessages => [...prevMessages, botResponse]);
//         }, 1000);
//     };

//     return (
//         <div>
//             <h2>Chatbot</h2>
//             <div >
//                 {messages.map((msg, index) => (
//                     <div key={index} >
//                         <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
//                     </div>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                 placeholder="Type your message..."
//             />
//             <button onClick={handleSend} >Send</button>
//         </div>
//     );
// };

// export default Chat;
// chat.js
// chat.js
import React, { useState, useEffect } from 'react';
import './Chatbot.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [qaData, setQaData] = useState({});

    useEffect(() => {
        // Fetch data from data.json
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                const data = await response.json();
                console.log(data);
                const qaMap = {};
                data.questions.forEach(item => {
                    qaMap[item.question.toLowerCase()] = item.answer;
                });
                setQaData(qaMap);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);

    const handleSend = () => {
        if (input.trim() === '') return;

        const newMessage = {
            text: input,
            sender: 'user',
        };

        setMessages([...messages, newMessage]);
        setInput('');

        // Check for matching question
        const answer = qaData[input.trim().toLowerCase()] || "I'm sorry, I don't understand that.";
        const botResponse = {
            text: answer,
            sender: 'bot',
        };

        // Simulate a delay for the bot response
        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, botResponse]);
        }, 1000);
    };

    return (
        <div className="chat-container">
            <h2 className="chat-header">Chatbot</h2>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your question..."
                    className="chat-input"
                />
                <button onClick={handleSend} className="chat-button">Send</button>
            </div>
        </div>
    );
};

export default Chat;
