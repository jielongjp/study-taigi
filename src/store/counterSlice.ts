import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  testCount: number;
  correctCount: number;
  incorrectCount: number;
}

const initialState: CounterState = {
  testCount: 0,
  correctCount: 0,
  incorrectCount: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementTestCount: (state) => {
      state.testCount += 1;
    },
    incrementCorrectCount: (state) => {
      state.correctCount += 1;
    },
    incrementIncorrectCount: (state) => {
      state.incorrectCount += 1;
    },
  },
});

export const {
  incrementTestCount,
  incrementCorrectCount,
  incrementIncorrectCount,
} = counterSlice.actions;

export default counterSlice.reducer;
