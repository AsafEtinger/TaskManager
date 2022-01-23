import { useDispatch } from "react-redux";
import { updateListTasks } from "../../Redux/Slices/tasksList";

const AddingNewTask = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(updateListTasks("sunday"));
      }}
    >
      +
    </button>
  );
};

export default AddingNewTask;
