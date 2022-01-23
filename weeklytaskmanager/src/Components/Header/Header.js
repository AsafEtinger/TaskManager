import classes from "./header.module.css";
import AddingNewTask from "../../Components/AddingNewTask/addingNewTask";
const Header = () => {
  return (
    <div className={classes.container}>
      <h3>Weekly Task Manager</h3>
      <AddingNewTask />
    </div>
  );
};

export default Header;
