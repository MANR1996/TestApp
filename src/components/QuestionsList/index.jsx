import React from "react";
import QuestionItem from "./QuestionItem";
import { QuestionList } from "./index.styles";

const QuestionsList = ({ questions }) => {

    return (
        <QuestionList>
            {questions?.map(el =>
                <QuestionItem key={el.id} id={el.id} question={el.question} options={el.options} />)}
        </QuestionList>
    )
}

export default QuestionsList;