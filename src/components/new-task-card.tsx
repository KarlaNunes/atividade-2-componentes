"use client";

import { Task } from "@/@types/task";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface NewTaskCardProps {
  addTask: Dispatch<SetStateAction<Task[]>>
}

export function NewTaskCard({
  addTask,
}: NewTaskCardProps) {
  const handleClick = () => {
    addTask(prevTasks => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        title: "Nova Tarefa",
        description: "Descrição da nova tarefa",
        completed: false,
      },
    ]);
  };

  return (
    <div
      className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md cursor-pointer border border-gray-100 max-w-[800px] w-full"
    >
        <h3 className="text-md font-semibold">Nova Tarefa</h3>
        <input 
            type="text"
            placeholder="Título da tarefa"
            className="p-2 text-sm border border-gray-300 rounded"
        />

        <textarea
            placeholder="Descrição (opcional)"
            className="p-2 text-sm border border-gray-300 rounded"
            rows={3}
        />

        <button
            className="px-4 py-2 mt-3 flex items-center justify-center gap-2 text-sm text-white font-bold bg-black rounded hover:bg-gray-800 cursor-pointer"
            onClick={handleClick}
        >
            <Plus 
              className="inline mr-2" 
              size={16}  
            />
            Adicionar Tarefa
        </button>
    </div>
  );
}