import React from 'react'
import OptionItem from "./OptionItem"
import { Options } from './index.styles'

const OptionsList = ({ options, id, testResults }) => {
    return (
        <Options data-testid='options-list' >
            {options?.map((el, i) =>
                <OptionItem key={i} option={el.option} rightAnswer={el.rightAnswer} id={id} testResults={testResults} />
            )}
        </Options>
    )
}

export default OptionsList
