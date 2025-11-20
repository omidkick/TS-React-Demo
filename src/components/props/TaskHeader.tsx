interface TaskHeaderProps {
  name: string;
  numOfTask: number;
}

function TaskHeader(props: TaskHeaderProps) {
  return (
    <h2>{`hey ${props.name} you have ${props.numOfTask} uncompleted task`}</h2>
  );
}

export default TaskHeader;
