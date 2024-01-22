import React, { useEffect, useState, createContext } from 'react'
import TestHeader from '../../components/TestHeader'
import LoadingBar from '../../components/LoadingBar'
import TestBody from '../../components/TestBody'
import TestFooter from '../../components/TestFooter'
import { AnswersProvider } from '../../contexts/AnswerContext'
import { loadTest } from '../../services/testService'
import { Test as TestDiv } from './index.styles'

export const AnswersContext = createContext(null);

const Test = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [test, setTest] = useState({})

    useEffect(() => {
        loadData()
        return () => { setTest({}); setIsLoading(true) }
    }, [])

    const loadData = async () => {
        setTest(await loadTest());
        setIsLoading(false)
    }

    return (
        <>
            {isLoading ? <LoadingBar /> :
                <TestDiv>
                    <AnswersProvider>
                        <TestHeader subject={test.subject} topic={test.topic} />
                        <TestBody guide={test.guide} questions={test.questions} />
                        <TestFooter numbQuest={test?.questions.length} />
                    </AnswersProvider>
                </TestDiv>
            }
        </>
    )
}

export default Test