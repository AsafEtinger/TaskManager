import { useEffect, useState } from "react";
import classes from "./Input.module.css";

// const backgroundChangingOnScroll = (y) => {
//   y >= 100 ? `container yes` : "container";
// };

const Input = ({ setTaskList }) => {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.length < 2) {
      return;
    }
    setTaskList({ inputValue: inputValue, textAreaValue: textAreaValue });
    setInputValue("");
    setTextAreaValue("");
  };

  const inputValueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const textAreaValueHandler = (e) => {
    setTextAreaValue(e.target.value);
  };

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const navBarBackgroundClass = () => {
  //   if (scrollPosition > 100) {
  //     return "containerWhite";
  //   } else {
  //     return "container";
  //   }
  // };

  // const cssClass = navBarBackgroundClass();
  // console.log(cssClass);
  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <div className={classes.inputAndBtnContainer}>
        <input
          type="text"
          onChange={inputValueChangeHandler}
          placeholder="Name your task"
          value={inputValue}
          className={classes.input}
        ></input>
        <button className={classes.btn}>Task it</button>
      </div>
      <div className={classes.wrapper}>
        <textarea
          className={classes.textarea}
          onChange={textAreaValueHandler}
          placeholder="Task description"
          value={textAreaValue}
        ></textarea>
      </div>
    </form>
  );
};

export default Input;
