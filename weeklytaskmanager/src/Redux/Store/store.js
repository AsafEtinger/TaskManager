import { configureStore } from "@reduxjs/toolkit";
import tasksListReducer from "../Slices/tasksList";
export default configureStore({
  reducer: { tasksList: tasksListReducer },
});
