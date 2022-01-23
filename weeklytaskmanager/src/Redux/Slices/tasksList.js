import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
  name: "taskList",
  initialState: {
    weekDays: {
      sunday: [
        { food: "buy some food for diner" },
        { movie: "to get tickets for SpiderMan new movie" },
      ],
      monday: [],
      tuesday: [],
      wednesday: [{ pizza: "it is pizza night!" }],
      thursday: [],
      friday: [],
      saturday: [],
    },
  },
  reducers: {
    sundayUpdate: (state, action) => {
      state.weekDays.sunday = [...state.weekDays.sunday, action.payload];
    },
    // I need to find a way to compere the li i have to the payload I bring up so I could filter it out
    sundayRemove: (state, action) => {
      state.weekDays.sunday = state.weekDays.sunday.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { sundayUpdate, sundayRemove } = taskListSlice.actions;
export default taskListSlice.reducer;

export const updateListTasks = (day) => {
  return async (dispatch) => {
    const tasks = async () => {
      dispatch(sundayUpdate(day));
    };
    try {
      await tasks();
    } catch (err) {
      console.log(err);
    }
  };
};
