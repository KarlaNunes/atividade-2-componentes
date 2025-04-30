"use client";

import { Task } from "@/@types/task";
import { NewTaskCard } from "@/components/new-task-card";
import { TaskCard } from "@/components/task-card";
import { useState } from "react";

const tasksData: Task[] = [
  {
    id: 1,
    title: "Exemplo de Tarefa 1",
    description: "Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir.",
    completed: false,
  },
]

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-white">
      <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
      <NewTaskCard 
        addTask={setTasks}
      />  

      <div className="grid grid-cols-2 gap-4 max-w-[800px] w-full">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>     
    </div>
  );
}
