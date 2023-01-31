import { Task } from '../types/Task';
import Card from './Card';
import Input from './Input';

import { useState } from 'react';

export default function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="flex-1 text-lg">
      <Input tasks={tasks} setTasks={setTasks} />
      <ul>
        {tasks.map((task) => (
          <Card key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </main>
  );
}
