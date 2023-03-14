import { useState } from "react";
import { Button } from "./Button";
import { Counter } from "./Counter";

const App = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  setTimeout(() => {
    setCounter2(counter2 + 1)
  }, 1000);

  return (
    <div>
      <h1>Counter setTimeout: {counter2}</h1>
      <Counter counter = {counter}/>
      <Button btnClick={increaseByOne} btnText = "Plus"/>
      <Button btnClick={setToZero} btnText = "Reset"/>
    </div>
  )
}

export default App;