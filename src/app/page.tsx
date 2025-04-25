import { NewTaskCard } from "@/components/new-task-card";
import { TaskCard } from "@/components/task-card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-white">
      <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
      <NewTaskCard />  

      <div className="grid grid-cols-2 gap-4 max-w-[800px] w-full">
        <TaskCard 
          title="Exemplo de Tarefa "
          description="Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir."
        />

        <TaskCard 
          title="teste"
          description="teste"
        />
      </div>     
    </div>
  );
}
