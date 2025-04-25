"use client";

import { Checkbox } from "@radix-ui/themes";
import { SquarePen, Trash2 } from "lucide-react";

export function TaskCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md"
    >
        <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <Checkbox 
                  defaultChecked
                  className="bg-black text-white border-gray-300 rounded"
              />
              <h3 className="text-md font-semibold">{title}</h3>
            </div>

            <div className="flex items-center gap-2">
              <SquarePen 
                className="inline mr-2" 
                size={16}
              />
  
              <Trash2 
                className="inline mr-2" 
                size={16}
              />  
            </div>
        </div>
        
        <p className="text-gray-400 text-[12px]">{description}</p>
    </div>
  );
}