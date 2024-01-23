import React from 'react'
import styled from 'styled-components'
import { StyledHeader, Subject, Topic } from './index.styles'

const TestHeader = ({ subject, topic }) => {
    return (
        <StyledHeader>
            <Subject  >{subject}</Subject>
            <Topic  >{topic}</Topic>
        </StyledHeader>
    )
}

export default TestHeader
