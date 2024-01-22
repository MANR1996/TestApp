import React from 'react'
import styled from 'styled-components'
import { Subject, Topic } from './index.styles'

const StyledHeader = styled.div`
    border-bottom: 1px solid black;
`;

const TestHeader = ({ subject, topic }) => {
    return (
        <StyledHeader>
            <Subject  >{subject}</Subject>
            <Topic  >{topic}</Topic>
        </StyledHeader>
    )
}

export default TestHeader
