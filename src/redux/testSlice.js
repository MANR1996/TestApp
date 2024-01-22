import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    answers: [],
    finished: false
}

export const testSlice = createSlice({
    name: 'testResults',
    initialState,
    reducers: {
        updateAnswers: (state, action) => {
            state.answers = action.payload
        },
        finishTest: (state, action) => {
            state.answers = action.payload
            state.finished = true;
        },
        restartTest: (state, action) => {
            state.answers = [];
            state.finished = false;
        },
    }
})

export const { updateAnswers, finishTest, restartTest } = testSlice.actions;
export default testSlice.reducer;