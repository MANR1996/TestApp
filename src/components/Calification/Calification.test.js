import React from 'react';
import { render } from '@testing-library/react';
import Calification from './index.jsx';
import { StoreMock, ThemeMock } from '../../mocks/mocks.jsx';
import { expect } from '@storybook/test';

const COLORS = {
    insufficient: 'rgb(255, 97, 84)',
    sufficient: 'rgb(255, 194, 84)',
    notable: 'rgb(67, 67, 215)',
    outstanding: 'rgb(48, 169, 86)'
}

test('render calification without props', () => {
    const { getByText, getByTestId } = render(<StoreMock><ThemeMock><Calification /></ThemeMock></StoreMock>);
    let element = getByText('0');
    expect(element).toBeInTheDocument();
    expect(true)
    element = getByTestId('calification-container');
    const styles = window.getComputedStyle(element)
    expect(styles.backgroundColor).toBe(COLORS.insufficient);
});

test('render calification with empty props', () => {
    const props = {
        questions: []
    }
    const { getByText, getByTestId } = render(<StoreMock><ThemeMock><Calification {...props} /></ThemeMock></StoreMock>);
    let element = getByText('0');
    expect(element).toBeInTheDocument();
    expect(true)
    element = getByTestId('calification-container');
    const styles = window.getComputedStyle(element)
    expect(styles.backgroundColor).toBe(COLORS.insufficient);
});

test('render calification with expected props insufficient', () => {
    const props = {
        questions: [
            {
                "id": 1,
                "question": "El esfuerzo cortante solo aparece cuando cortamos algo.",
                "options": [
                    {
                        "option": "Verdadero",
                        "rightAnswer": true
                    },
                    {
                        "option": "Falso"
                    }
                ]
            },
            {
                "id": 2,
                "question": "La tracción es un esfuerzo que tiende a estirar un objeto.",
                "options": [
                    {
                        "option": "Verdadero",
                        "rightAnswer": true
                    },
                    {
                        "option": "Falso"
                    }
                ]
            },
            {
                "id": 3,
                "question": "El esqueleto humano está sometido básicamente al esfuerzo de compresión.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 4,
                "question": "Un vaso de plástico no tiene ningún tipo de estructura.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            }
        ]
    }
    const { getByText, getByTestId } = render(<StoreMock><ThemeMock><Calification {...props} /></ThemeMock></StoreMock>);
    let element = getByText('2.5');
    expect(element).toBeInTheDocument();
    expect(true)
    element = getByTestId('calification-container');
    const styles = window.getComputedStyle(element)
    expect(styles.backgroundColor).toBe(COLORS.insufficient);
});

test('render calification with expected props sufficient', () => {
    const props = {
        questions: [
            {
                "id": 1,
                "question": "El esfuerzo cortante solo aparece cuando cortamos algo.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 2,
                "question": "La tracción es un esfuerzo que tiende a estirar un objeto.",
                "options": [
                    {
                        "option": "Verdadero",
                        "rightAnswer": true
                    },
                    {
                        "option": "Falso"
                    }
                ]
            },
            {
                "id": 3,
                "question": "El esqueleto humano está sometido básicamente al esfuerzo de compresión.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 4,
                "question": "Un vaso de plástico no tiene ningún tipo de estructura.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            }
        ]
    }
    const { getByText, getByTestId } = render(<StoreMock><ThemeMock><Calification {...props} /></ThemeMock></StoreMock>);
    let element = getByText('5');
    expect(element).toBeInTheDocument();
    expect(true)
    element = getByTestId('calification-container');
    const styles = window.getComputedStyle(element)
    expect(styles.backgroundColor).toBe(COLORS.sufficient);
});

test('render calification with expected props notable', () => {
    const props = {
        questions: [
            {
                "id": 1,
                "question": "El esfuerzo cortante solo aparece cuando cortamos algo.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 2,
                "question": "La tracción es un esfuerzo que tiende a estirar un objeto.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 3,
                "question": "El esqueleto humano está sometido básicamente al esfuerzo de compresión.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 4,
                "question": "Un vaso de plástico no tiene ningún tipo de estructura.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            }
        ]
    }
    const { getByText, getByTestId } = render(<StoreMock><ThemeMock><Calification {...props} /></ThemeMock></StoreMock>);
    let element = getByText('7.5');
    expect(element).toBeInTheDocument();
    expect(true)
    element = getByTestId('calification-container');
    const styles = window.getComputedStyle(element)
    expect(styles.backgroundColor).toBe(COLORS.notable);
});

test('render calification with expected props outstanding', () => {
    const props = {
        questions: [
            {
                "id": 1,
                "question": "El esfuerzo cortante solo aparece cuando cortamos algo.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 2,
                "question": "La tracción es un esfuerzo que tiende a estirar un objeto.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 3,
                "question": "El esqueleto humano está sometido básicamente al esfuerzo de compresión.",
                "options": [
                    {
                        "option": "Verdadero"
                    },
                    {
                        "option": "Falso",
                        "rightAnswer": true
                    }
                ]
            },
            {
                "id": 4,
                "question": "Un vaso de plástico no tiene ningún tipo de estructura.",
                "options": [
                    {
                        "option": "Verdadero",
                        "rightAnswer": true
                    },
                    {
                        "option": "Falso"
                    }
                ]
            }
        ]
    }
    const { getByText, getByTestId } = render(<StoreMock><ThemeMock><Calification {...props} /></ThemeMock></StoreMock>);
    let element = getByText('10');
    expect(element).toBeInTheDocument();
    expect(true)
    element = getByTestId('calification-container');
    const styles = window.getComputedStyle(element)
    expect(styles.backgroundColor).toBe(COLORS.outstanding);
});

test('render calification with less questions than expected', () => {
    const props = {
        questions: [
            {
                "id": 1,
                "question": "El esfuerzo cortante solo aparece cuando cortamos algo.",
                "options": [
                    {
                        "option": "Verdadero",
                        "rightAnswer": true
                    },
                    {
                        "option": "Falso"
                    }
                ]
            }
        ]
    }
    const { getByText, getByTestId } = render(<StoreMock><ThemeMock><Calification {...props} /></ThemeMock></StoreMock>);
    let element = getByText('0');
    expect(element).toBeInTheDocument();
    expect(true)
    element = getByTestId('calification-container');
    const styles = window.getComputedStyle(element)
    expect(styles.backgroundColor).toBe(COLORS.insufficient);
});