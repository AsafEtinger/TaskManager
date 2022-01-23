import { useSelector, useDispatch } from "react-redux";
import { sundayRemove } from "../../Redux/Slices/tasksList";
const Days = () => {
  const dispatch = useDispatch();
  const { weekDays } = useSelector((state) => state.tasksList);
  console.log(weekDays, "weekDays");

  const test = Object.entries(weekDays);
  console.log(test);

  const weekDaysDisplay = test.map((item) => {
    const day = item[0];
    const tasks = item[1];

    const test = tasks.map((item) => {
      const taskName = Object.keys(item);
      const taskDescription = Object.values(item);
      return (
        <div key={taskName}>
          <li>{`${taskName} -  ${taskDescription}`}</li>
          <button
            onClick={() => {
              dispatch(sundayRemove(taskName));
            }}
          >
            Done
          </button>
        </div>
      );
    });

    return (
      <div key={day}>
        <h3>{day}</h3>
        <h4>{test}</h4>
      </div>
    );
  });
  return weekDaysDisplay;
};

export default Days;
