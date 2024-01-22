import React from 'react'
import QuestionsList from '../QuestionsList';

const TestBody = ({ guide, questions }) => {
    return (
        <div style={{ marginTop: '36px' }}>
            < h2 style={{ margin: '0 0 36px' }} > {guide}</h2 >
            <QuestionsList questions={questions} />
        </div >
    )
}

export default TestBody
