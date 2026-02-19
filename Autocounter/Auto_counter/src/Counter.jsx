import { useState, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startCounter = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopCounter = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetCounter = () => {
    stopCounter();
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.counter}>{count}</h1>

      <div>
        <button style={styles.btn} onClick={startCounter}>Start</button>
        <button style={styles.btn} onClick={stopCounter}>Stop</button>
        <button style={styles.btn} onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    color: "white",
  },
  counter: {
    fontSize: "70px",
    marginBottom: "20px",
  },
  btn: {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
