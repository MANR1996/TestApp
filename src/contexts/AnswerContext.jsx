import React, { createContext, useState } from 'react';

export const AnswersContext = createContext(null);

export const AnswersProvider = ({ children }) => {

    const [answeredQuestions, setAnsweredQuestions] = useState([])


    const onAnswerQuestion = (questionId, answer) => {
        if (answeredQuestions.filter(el => el.questionId == questionId).length == 0) {
            setAnsweredQuestions([...answeredQuestions, { 'questionId': questionId, 'answer': answer }])
        } else {
            setAnsweredQuestions(answeredQuestions.map(el => {
                if (el.questionId == questionId) {
                    return { ...el, answer: answer };
                } else {
                    return el;
                }
            }))
        }
    }

    return (
        <AnswersContext.Provider value={{ answeredQuestions, onAnswerQuestion }}>
            {children}
        </AnswersContext.Provider>
    );
};