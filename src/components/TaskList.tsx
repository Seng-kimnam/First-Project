// TaskList.tsx — buggy version
import { useState, useEffect } from "react";

interface Task {
  id: number;
  title: string;
}

function TaskItem({ title }: { title: string }) {
  return <li>{title}</li>; // BUG 2 lives here — see below
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // BUG 1 lives here

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks") // BUG 3 lives here
      .then((res) => res.json())
      .then(setTasks)
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {tasks.map((t) => (
        <TaskItem key={t.id} taskTitle={t.title} />
      ))}
    </ul>
  );
};

export default TaskList;
