import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Card from '../components/Card';
import { useAppSelector, useAppDispatch } from './hooks';
import { selectTasks, reorder } from './tasksSlice';

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    dispatch(
      reorder({
        startIndex: result.source.index,
        endIndex: result.destination.index
      })
    );
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Card key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
