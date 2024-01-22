import React, { useEffect, useState, createContext } from 'react'
import { loadTest } from '../../services/testService'
import LoadingBar from '../../components/LoadingBar'
import TestHeader from '../../components/TestHeader'
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
                    <TestHeader subject={test.subject} topic={test.topic} />
                </TestDiv>
            }
        </>
    )
}

export default Test
