export const DEFAULTMOCKEDSTATE = {
    testResults: {
        answers: [
            {
                questionId: 1,
                answer: 'Verdadero'
            },
            {
                questionId: 2,
                answer: 'Falso'
            }
        ],
        finished: false
    }
};


export const FINISHEDSTORE = {
    testResults: {
        answers: [
            {
                "questionId": 1,
                "answer": "Falso"
            },
            {
                "questionId": 2,
                "answer": "Falso"
            },
            {
                "questionId": 3,
                "answer": "Falso"
            },
            {
                "questionId": 4,
                "answer": "Verdadero"
            }
        ],
        finished: true
    },
}

export const STARTSTORE = {
    testResults: {
        answers: []
    },
    finished: false
}

export const ANSWEREDMOCKEDSTATE = {
    testResults: {
        answers: [
            {
                questionId: 1,
                answer: 'Verdadero'
            },
            {
                questionId: 2,
                answer: 'Falso'
            },
            {
                questionId: 3,
                answer: 'Falso'
            },
            {
                questionId: 4,
                answer: 'Falso'
            },
        ],
        finished: false,
    }
};

export const INSUFFICIENTMOCKEDSTATE = {
    testResults: {
        answers: [
            {
                questionId: 1,
                answer: 'Verdadero'
            },
            {
                questionId: 2,
                answer: 'Falso'
            },
            {
                questionId: 3,
                answer: 'Verdadero'
            },
            {
                questionId: 4,
                answer: 'Verdadero'
            }
        ],
        finished: false,
    }
};

export const SUFFICIENTMOCKEDSTATE = {
    testResults: {
        answers: [
            {
                questionId: 1,
                answer: 'Verdadero'
            },
            {
                questionId: 2,
                answer: 'Falso'
            },
            {
                questionId: 3,
                answer: 'Verdadero'
            },
            {
                questionId: 4,
                answer: 'Falso'
            }
        ],
        finished: false,
    }
};

export const NOTABLEMOCKEDSTATE = {
    testResults: {
        answers: [
            {
                questionId: 1,
                answer: 'Verdadero'
            },
            {
                questionId: 2,
                answer: 'Falso'
            },
            {
                questionId: 3,
                answer: 'Falso'
            },
            {
                questionId: 4,
                answer: 'Falso'
            }
        ],
        finished: false,
    }
};

export const OUTSTANDINGMOCKEDSTATE = {
    testResults: {
        answers: [
            {
                questionId: 1,
                answer: 'Verdadero'
            },
            {
                questionId: 2,
                answer: 'Verdadero'
            },
            {
                questionId: 3,
                answer: 'Falso'
            },
            {
                questionId: 4,
                answer: 'Falso'
            }
        ],
        finished: false,
    }
};

export const CONTEXTVALUE = [
    {
        "questionId": 1,
        "answer": "Falso"
    },
    {
        "questionId": 2,
        "answer": "Falso"
    },
    {
        "questionId": 3,
        "answer": "Falso"
    },
    {
        "questionId": 4,
        "answer": "Falso"
    }
]