import { Task } from '../types/Task';
import { useState } from 'react';

export default function Input({ tasks, setTasks }: { tasks: Task[]; setTasks: Function }) {
  const [title, setTitle] = useState<string>('');

  const handleAdd = () => {
    if (title === '') return;
    setTasks([...tasks, { id: Date.now(), content: title }]);
    setTitle('');
  };

  return (
    <div className="mx-auto mb-2 flex max-w-md flex-row rounded-xl">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="mr-2 w-full rounded-xl bg-slate-600 p-4 outline-none"
        type="text"
        name="title"
        id="title"
        placeholder="I need to do..."
      />
      <input onClick={handleAdd} type="button" value="Add" className="rounded-xl bg-slate-600 p-4 outline outline-0 hover:cursor-pointer hover:outline-2" />
    </div>
  );
}
