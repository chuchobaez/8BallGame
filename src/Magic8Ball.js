import React, { useState } from 'react';
import './Magic8Ball.css';

const Magic8Ball = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const answers = ['Si', 'No', 'No se', 'Pregunta despues'];

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleButtonClick = () => {
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        setAnswer(randomAnswer);
    };


    return (
        <div className='container'>
            <h1>Juego de la bola 8</h1>
            <input
                type='text'
                value={question}
                onChange={handleQuestionChange}
                placeholder='Haz tu pregunta..'
            />
            <button onClick={handleButtonClick}>Enviar pregunta</button>
            <div>
                {answer && <p>Respuesta: {answer}</p>}
            </div>
        </div>
    );
};

export default Magic8Ball;