import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import { finishTest, restartTest } from '../../redux/testSlice';
import { Button, LinkButton } from '../Button';
import { AnswersContext } from '../../contexts/AnswerContext';
import { TestButtons } from '../../styles/index.styles';

const TestFooter = ({ numbQuest }) => {

    const { answeredQuestions } = useContext(AnswersContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const finished = useSelector((state) => state.testResults.finished);

    const onClickFinish = () => {
        dispatch(finishTest(answeredQuestions));
        navigate('/');
    }

    const onClickRestart = () => {
        dispatch(restartTest());
        navigate('/');
    }

    return (
        <TestButtons>
            {finished ? (
                <>
                    <Button text={'Reiniciar'} onClick={onClickRestart} />
                </>) : (
                <>
                    <LinkButton text="Atrás" link='/' />
                    < Button disabled={(numbQuest !== answeredQuestions?.length)} text={'Finalizar'} onClick={onClickFinish} />
                </>
            )}
        </TestButtons>
    )
}

export default TestFooter
