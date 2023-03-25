import { useState } from "react";

export default function ToDo() {
  const [tasks, setTask] = useState(["deneme", "deneme 2", "deneme 3"]);
  const [newTask, setNew] = useState("");

  function addItem(e) {
    setNew(e.target.value);
  }

  function handleChange(e) {
    setTask([...tasks, newTask]);
    setNew("");
  }
  return (
    <div>
      <br />
      <label>
        test
        <input onChange={addItem} value={newTask} />
      </label>
      <br />
      <br />
      <button onClick={handleChange}>add</button>
      {tasks.map((xx, key) => {
        return (
          <div key={key}>
            <h1>{xx}</h1>
          </div>
        );
      })}
    </div>
  );
}
