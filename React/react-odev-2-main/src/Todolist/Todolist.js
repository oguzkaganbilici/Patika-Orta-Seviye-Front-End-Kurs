import React, { useState } from "react";
import Main from "./Main";

export default function Todo() {
  const [todolist, addToDo] = useState([
    { id: 0, task: "Learn JavaScript" },
    { id: 1, task: "Learn React" },
    { id: 2, task: "Have a life!" }
  ]);

  return (
    <section className="todoapp">
      <Main lists={todolist} />
    </section>
  );
}
