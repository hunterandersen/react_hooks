import { useState } from "react";
import Overview from "./Components/Overview";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(["Do the dishes"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector("#inputTask");

    setTasks([...tasks, input.value]);
    input.value = "";
  };

  return (
    <main>
      <h1>Tasklist Manager</h1>
      <form action="submit">
        <label htmlFor="inputTask">Add a Task: </label>
        <input type="text" name="inputTask" id="inputTask" minLength={1}/>
        <button type="submit" onClick={(event) =>handleSubmit(event)}>Add</button>
      </form>
      <Overview list={tasks} />
    </main>
  );
};

export default App;
