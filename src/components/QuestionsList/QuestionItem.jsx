import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import OptionsList from "../OptionsList";
import { QuestionCalificationContainer, QuestionItemContainer, Question } from './index.styles'


const QuestionItem = ({ id, question, options }) => {

    const testResults = useSelector((state) => state.testResults);

    const isRightAnswer = useMemo(() => testResults.finished && testResults.answers.filter(el => el.questionId == id)[0].answer == options.filter(el => el.rightAnswer == true)[0].option
        , [testResults])

    return (
        <QuestionCalificationContainer data-testid='question-calification-container' >
            {options?.length > 0 && question &&
                <QuestionItemContainer rightAnswer={isRightAnswer} finished={testResults.finished} >
                    <Question rightAnswer={isRightAnswer} finished={testResults.finished} >{question}</Question>
                    <OptionsList options={options} id={id} testResults={testResults} />
                </QuestionItemContainer>}
        </QuestionCalificationContainer >
    );
}

export default QuestionItem;