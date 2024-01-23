import React from 'react'
import QuestionsList from '../QuestionsList';

const TestBody = ({ guide, questions }) => {
    return (
        <div style={{ marginTop: '32px' }}>
            < h2 style={{ margin: '0 0 32px' }} > {guide}</h2 >
            <QuestionsList questions={questions} />
        </div >
    )
}

export default TestBody
