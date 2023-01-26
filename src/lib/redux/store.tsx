import { createReducer, createAction, configureStore } from "@reduxjs/toolkit";

export const addToFirst = createAction("ADD_TO_FIRST");
export const addToSecond = createAction("ADD_TO_SECOND");
export const noChanges = createAction("NO_CHANGES");

const valuesReducer = createReducer<{
  firstNumber: number;
  secondNumber: number;
  numbers: number[];
}>(
  {
    firstNumber: 0,
    secondNumber: 0,
    numbers: [],
  },
  (builder) => {
    builder
      .addCase(addToFirst, (state) => {
        state.firstNumber++;
        state.numbers = [state.firstNumber];
      })
      .addCase(addToSecond, (state) => {
        state.secondNumber++;
        state.numbers = [state.firstNumber];
      })
      .addCase(noChanges, (state) => {
        return { ...state };
      });
  }
);

export const store = configureStore({
  reducer: valuesReducer,
});

export type RootState = ReturnType<typeof store.getState>;
