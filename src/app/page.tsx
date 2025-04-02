"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">To-Do List</h2>
          <div className="flex space-x-2 mb-4">
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
            />
            <Button onClick={addTask}>Add</Button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-200 p-2 rounded-lg my-2"
              >
                <span>{task}</span>
                <Button variant="ghost" onClick={() => removeTask(index)}>
                  <Trash2 className="text-red-500" />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
