import { useSelector } from "react-redux";
const ListOfTasks = () => {
  const { sunday } = useSelector((state) => state.tasksList.weekDays);
  return sunday.map((task) => <li>{task}</li>);
};

export default ListOfTasks;
