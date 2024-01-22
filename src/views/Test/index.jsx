import React, { useEffect, useState, createContext } from 'react'
import TestHeader from '../../components/TestHeader'
import { useSelector } from "react-redux"
import LoadingBar from '../../components/LoadingBar'
import TestFooter from '../../components/TestFooter'
import TestBody from '../../components/TestBody'
import Calification from '../../components/Calification'
import { AnswersProvider } from '../../contexts/AnswerContext'
import { loadTest } from '../../services/testService'
import EmptyTest from '../../components/EmptyTest'
import { Test as TestDiv } from './index.styles'

export const AnswersContext = createContext(null);

const Test = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [test, setTest] = useState({})
    const finished = useSelector((state) => state.testResults.finished);

    useEffect(() => {
        loadData()
        return () => { setTest({}); setIsLoading(true) }
    }, [])

    const loadData = async () => {
        setTest(await loadTest());
        setIsLoading(false)
    }

    const tryAgain = () => {
        setIsLoading(true)
        loadData();
    }

    return (
        <>
            {isLoading ? <LoadingBar /> :
                <TestDiv>
                    {Object.keys(test).length === 0 ?
                        <EmptyTest tryAgain={tryAgain} /> :
                        <AnswersProvider>
                            {finished && <Calification questions={test.questions} />}
                            <TestHeader subject={test.subject} topic={test.topic} />
                            <TestBody guide={test.guide} questions={test.questions} />
                            <TestFooter numbQuest={test?.questions.length} />
                        </AnswersProvider>}
                </TestDiv>
            }
        </>
    )
}

export default Test