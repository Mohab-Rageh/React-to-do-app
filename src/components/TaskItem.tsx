import { Trash, Pencil } from "lucide-react";

import { motion } from "framer-motion";

import audio from "../assets/audio/ting-sound-197759.mp3";

type Task = {
  id: number;
  item: string;
  checked: boolean;
};

type TaskItemProps = {
  task: Task;
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
  enterEditMode: (task: Task) => void;
};

const TaskItem = ({
  task,
  handleCheck,
  handleDelete,
  enterEditMode,
}: TaskItemProps) => {
  const checkMarkSoundEffect = new Audio(audio);

  return (
    <motion.li
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="group/item relative z-10 *:transition hover:bg-slate-50 has-[:checked]:bg-slate-100 dark:hover:bg-gray-900/20 has-[:checked]:dark:bg-gray-900/20"
    >
      <label
        htmlFor={task.id.toString()}
        className="cursor-pointer has-[:checked]:line-through has-[:checked]:text-slate-300 dark:has-[:checked]:text-slate-600 flex items-center gap-2 peer"
        title="Toggle between complete and incomplete"
      >
        <input
          className="cursor-pointer appearance-none size-5 rounded-md border z-[-1] border-slate-300 checked:bg-gradient-to-br from-check-background1 to-check-background2 transition ring-sky-500 hover:ring-1"
          type="checkbox"
          name={task.item}
          id={task.id.toString()}
          checked={task.checked}
          onChange={() => {
            handleCheck(task.id);
          }}
          onClick={() => !task.checked && checkMarkSoundEffect.play()}
        />
        {task.item}
      </label>
      <svg
        className="absolute left-[16.5px] z-[-1] scale-0 peer-has-[:checked]:scale-100 "
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="9"
      >
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>
      <div className="flex items-center gap-2 *:transition">
        <button
          className="opacity-0 group-hover/item:opacity-100 focus:opacity-100"
          title="Edit"
          aria-label={`Edit ${task.item} Task`}
          onClick={() => enterEditMode(task)}
        >
          <Pencil className="transition size-[14px]  hover:text-blue-600 focus:text-blue-600 md:size-4" />
        </button>
        <button
          className="opacity-0 group-hover/item:opacity-100 focus:opacity-100"
          title="Clear"
          aria-label={`Delete ${task.item} Task`}
          onClick={() => handleDelete(task.id)}
        >
          <Trash className="transition size-[14px]  hover:text-red-500 focus:text-red-500 md:size-4" />
        </button>
      </div>
    </motion.li>
  );
};
export default TaskItem;
