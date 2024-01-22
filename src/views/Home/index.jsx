import React from 'react'
import { useSelector } from "react-redux";
import { LinkButton } from '../../components/Button'
import { HomeBtns, HomeTitle } from './index.styles'

function Home() {

    const finished = useSelector((state) => state.testResults.finished);

    return (
        <div>
            <HomeTitle>Aplicación Test</HomeTitle>
            <HomeBtns>
                <LinkButton disabled={finished} text={'Realizar prueba'} link='/test' />
                <LinkButton disabled={!finished} text={'Resultado test'} link='/test' />
            </HomeBtns>
        </div>
    )
}

export default Home