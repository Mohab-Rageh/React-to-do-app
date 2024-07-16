import { FormEvent, useState } from "react";

type Task = {
  id: number;
  item: string;
  checked: boolean;
};

type AddTasksProps = {
  tasks: Task[];

  saveAndUpdate: (key: string, value: Task[], updatedTasks: Task[]) => void;
};

const AddTasks = ({ tasks, saveAndUpdate }: AddTasksProps) => {
  const [addTask, setAddTask] = useState("");

  const addNewItem = (task: string) => {
    const id = Date.now();
    const addedTask = {
      id,
      item: task,
      checked: false,
    };
    const listTasks = [...tasks, addedTask];
    saveAndUpdate("tasks", listTasks, listTasks);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addNewItem(addTask);
    setAddTask("");
  };
  return (
    <form
      className="mb-4 shadow-lg rounded-md transition  hover:ring-1 focus-within:ring-1 ring-slate-900 dark:hover:ring-1 dark:focus-within:ring-1 dark:ring-blue-600"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor="entry-item">
        Create a new todo
      </label>
      <input
        id="entry-item"
        className="w-full p-3 rounded-[5px] dark:text-slate-50 dark:bg-[#25273D] caret-bright-blue tracking-wide transition  outline-none"
        type="text"
        placeholder="Create a new todo..."
        required
        autoFocus
        dir="auto"
        maxLength={25}
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      />
    </form>
  );
};
export default AddTasks;
