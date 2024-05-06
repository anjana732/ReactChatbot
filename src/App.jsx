import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const sendQuestion = () => {
    // Here you can handle sending the question to your chatbot backend
    // For simplicity, let's just set the response based on the question
    setResponse(`Chatbot responds to: ${question}`);
    // Clear the question input after sending
    setQuestion('');
  };

  return (
    <div className="app-container">
    
      <div className="chatbot-container">
        <button onClick={togglePopup} className="chatbot-button">
          ChatBot
        </button>
        {isPopupOpen && (
          <div className="chatbot-popup">
            <div className="chatbot-input">
            <div className="chatbot-messages">
              <textarea
                value={response}
                readOnly
                placeholder="Chatbot response..."
              ></textarea>
            </div>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question..."
              />
              <button onClick={sendQuestion}>Ask</button>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default App;