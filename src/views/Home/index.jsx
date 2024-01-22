import React from 'react'
import { LinkButton } from '../../components/Button'
import { HomeBtns, HomeTitle } from './index.styles'

function Home() {

    return (
        <div>
            <HomeTitle>Aplicación Test</HomeTitle>
            <HomeBtns>
                <LinkButton text={'Realizar prueba'} link='/test' />
                <LinkButton disabled={true} text={'Resultado test'} link='/test' />
            </HomeBtns>
        </div>
    )
}

export default Home
