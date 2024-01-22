import React, { useState, useContext, useEffect } from "react";
import { AnswersContext } from "../../contexts/AnswerContext";
import { OptionLabel, OptionItemContainer, Checkmark } from "./index.styles";

const OptionItem = ({ option, id, rightAnswer, testResults }) => {

    const [answers, setAnswers] = useState('');
    const { answeredQuestions, onAnswerQuestion } = useContext(AnswersContext);
    const answeredQuestion = answeredQuestions.filter(element => element.questionId === id)[0];

    useEffect(() => {
        if (testResults?.finished) {
            setAnswers(testResults.answers.filter(el => el.questionId === id)[0])
        } else {
            setAnswers(answeredQuestion)
        }
    }, [answeredQuestion, testResults])

    const testInProgress = (!testResults?.finished);

    return (
        <OptionItemContainer testInProgress={testInProgress} data-testid='option-item-container'
            onClick={() => testInProgress && answers?.answer !== option && onAnswerQuestion(id, option)}
        >
            <input
                type='checkbox'
                checked={option == undefined ? false : testInProgress ? answers?.answer === option : answers?.answer === option || rightAnswer || false}
                onChange={(e) => { e.stopPropagation(); testInProgress && answers?.answer !== option && onAnswerQuestion(id, option) }}
                data-testid='option-item-checkbox'
                style={{ display: 'none' }}
            />
            <Checkmark
                checked={option == undefined ? false : testInProgress ? answers?.answer === option : answers?.answer === option || rightAnswer || false}
                finished={!testInProgress}
                rightAnswer={rightAnswer}
            ></Checkmark>
            <OptionLabel data-testid='option-item-label' testInProgress={testInProgress} >{option}</OptionLabel>
        </OptionItemContainer >
    );
}

export default OptionItem;