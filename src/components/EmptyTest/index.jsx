import React from 'react'
import { LinkButton, Button } from '../Button'
import { TestButtons } from '../../styles/index.styles'

const EmptyTest = ({ tryAgain }) => {
    return (
        <div>
            <h1>Lo sentimos, no encontramos ningún test.</h1>
            <TestButtons >
                <LinkButton text="Atrás" link='/' />
                <Button text="Reintentar" onClick={tryAgain} />
            </TestButtons>
        </div>
    )
}

export default EmptyTest
