import { Task } from '../types/Task';
import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useAppDispatch } from '../redux/hooks';
import { add } from '../redux/tasksSlice';

export default function Input() {
  const [content, setContent] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleAdd = (e: any) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (content === '') return;
      dispatch(add({ id: Date.now(), content: content, completed: false }));
      setContent('');
    }
  };

  return (
    <div className="mb-2 flex">
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        onKeyDown={handleAdd}
        className="mr-2 w-full rounded-lg bg-neutral-200 p-4 outline-none dark:bg-neutral-800"
      />
      <button onClick={handleAdd} className="rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
        <MdAdd className="h-8 w-8" />
      </button>
    </div>
  );
}
