import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/timer.module.css"

const Timer = () => {
  
  const initialVal = { sec: 0, minute: 25, id: null, isBreak: false };
  const [timer, setTimer] = useState(initialVal);

  const handleStart = () => {
    if (!timer.id) {
      let id = setInterval(() => {
        setTimer((prev) => {
          if (prev.sec === 0 && prev.minute === 0) {
            if (!prev.isBreak) {
              return { ...prev, sec: 0, minute: 5, isBreak: true };
            } else {
              clearInterval(id);
              return initialVal;
            }
          } else if (prev.sec === 0) {
            return { ...prev, minute: prev.minute - 1, sec: 59 };
          } else {
            return { ...prev, sec: prev.sec - 1 };
          }
        });
      }, 1000);
      setTimer({ ...timer, id });
    }
  };


  const handlePause = () => {
    if (timer.id) {
      clearInterval(timer.id);
      setTimer({ ...timer, id: null });
    }
  };


  const handleReset = () => {
    if (timer.id) {
      clearInterval(timer.id);
    }
    setTimer(initialVal);
  };


  return (
    <>
    <Navbar/>
      <div className={styles.timerContainer}>
        <h1>{timer.isBreak ? "Break Timer" : "Timer"}</h1>
        <h1>
          {timer.minute < 10 ? `0${timer.minute}` : timer.minute} :{" "}
          {timer.sec < 10 ? `0${timer.sec}` : timer.sec}
        </h1>
      </div>
      <div className={styles.ctrlBtns}>
        <button disabled={timer.id} onClick={handleStart}>
          Start
        </button>
        <button disabled={!timer.id} onClick={handlePause}>
          Pause
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default Timer;
