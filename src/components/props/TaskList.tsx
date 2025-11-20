import React from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  tasks: Task[];
};

// const TaskList = ({ tasks }: Props) => {
//   return (
//     <div className="w-full">
//       {tasks.map((item) => (
//         <div
//           key={item.id}
//           className="flex items-center justify-center gap-4 text-xl"
//         >
//           <input type="checkbox" checked={item.completed} onChange={() => {}} />
//           <span>{item.title}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export { TaskList };

const TaskListAsFC: React.FC<Props> = ({ tasks }) => {
  return (
    <div className="w-full">
      {tasks.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center gap-4 text-xl"
        >
          <input type="checkbox" checked={item.completed} onChange={() => {}} />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskListAsFC;
