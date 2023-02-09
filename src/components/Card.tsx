import { Task } from '../types/Task';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';
import { useAppDispatch } from '../redux/hooks';
import { edit, remove } from '../redux/tasksSlice';

export default function Card({ task, index }: { task: Task; index: number }) {
  const dispatch = useAppDispatch();

  return (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => {
            dispatch(edit({ ...task, completed: !task.completed }));
          }}
          className="mb-2 flex min-h-24 flex-row items-center rounded-xl bg-neutral-200 p-4 outline-none hover:cursor-pointer dark:bg-neutral-800">
          <button className="mr-4">{task.completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</button>
          <p className="mr-4 w-full break-all">{task.content}</p>
          <MdDelete
            onClick={() => {
              dispatch(remove(task.id));
            }}
          />
        </li>
      )}
    </Draggable>
  );
}
