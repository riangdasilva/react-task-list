import { Task } from '../types/Task';

export default function Card({ task, deleteTask }: { task: Task; deleteTask: Function }) {
  return (
    <li
      onClick={() => {
        deleteTask(task.id);
      }}
      className="mx-auto mb-2 min-h-24 max-w-md rounded-xl bg-slate-700 p-4 outline outline-0 hover:cursor-pointer hover:outline-2">
      {task.content}
    </li>
  );
}
