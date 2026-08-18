"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "../lib/supabaseClient";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      setLoading(true);
      const supabase = getSupabase();
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: true });

      if (error) throw error;
      setTasks(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function addTask(e) {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      const supabase = getSupabase();
      const { error } = await supabase
        .from("tasks")
        .insert({ title: newTask.trim() });

      if (error) throw error;
      setNewTask("");
      loadTasks();
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteTask(id) {
    try {
      const supabase = getSupabase();
      const { error } = await supabase.from("tasks").delete().eq("id", id);
      if (error) throw error;
      loadTasks();
    } catch (err) {
      setError(err.message);
    }
  }

  async function toggleComplete(id, completed) {
    try {
      const supabase = getSupabase();
      const { error } = await supabase
        .from("tasks")
        .update({ completed: !completed })
        .eq("id", id);

      if (error) throw error;
      loadTasks();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main>
      <h1>Mi lista de tareas</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p className="empty">Cargando...</p>
      ) : tasks.length === 0 ? (
        <p className="empty">Todavía no tienes tareas.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <button
                className="bomb-btn"
                onClick={() => toggleComplete(task.id, task.completed)}
                aria-label={task.completed ? "Marcar como pendiente" : "Marcar como completada"}
              >
                {task.completed ? "💥" : "💣"}
              </button>
              <span className={task.completed ? "task-title done" : "task-title"}>
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)}>Borrar</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
