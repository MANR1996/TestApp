import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Calification as CalificationDiv } from './index.styles';

const Calification = ({ questions }) => {

    const answers = useSelector((state) => state.testResults.answers);

    const calculateCalification = useMemo(() => {
        let cont = 0;
        if (answers?.length > 0 && questions?.length > 0) {
            answers.map(el => {
                if (questions.filter(e => e.id == el.questionId).length > 0 && questions.filter(e => e.id == el.questionId)[0].options.filter(e => e.rightAnswer == true)[0].option == el.answer) {
                    cont++;
                }
            })

            return cont / questions.length * 10;
        } else {
            return 0;
        }
    }, [questions])

    return (
        <CalificationDiv data-testid='calification-container' calification={calculateCalification} >
            <span>{calculateCalification}</span>
        </CalificationDiv>
    )
}

export default Calification
