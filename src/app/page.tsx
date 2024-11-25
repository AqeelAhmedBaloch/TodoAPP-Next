"use client";
import { useState } from "react";

export default function Home() {
  //TodoApp Component
  const TodoApp = () => {
    interface Todo {
      movie: string;
      id: number;
    }

    const [todos, setTodos] = useState<Todo[]>([
      { movie: "Django Unchained", id: 1 },
      { movie: "Catch Me If You Can", id: 2 },
    ]);
    const [inputVal, setInput] = useState<string>("");
    const [id, setId] = useState<number>(0);

    const addItem = () => {
      const existingTodo = todos.find((item) => item.id === id);
      if (existingTodo) {
        const updatedTodos = todos.map((item) =>
          item.id === id ? { ...item, movie: inputVal } : item
        );
        setTodos(updatedTodos);
      } else {
        setTodos([...todos, { movie: inputVal, id }]);
      }
      setInput("");
      setId(0);
    };

    const editItem = (id: number) => {
      const todoToEdit = todos.find((item) => item.id === id);
      if (todoToEdit) {
        setInput(todoToEdit.movie);
        setId(todoToEdit.id);
      }
    };

    const delItem = (id: number) => {
      const updatedTodos = todos.filter((item) => item.id !== id);
      setTodos(updatedTodos);
    };

    return (
      <div>
        <h1 className="text-center text-[30px] sm:text-[40px] font-serif bg-blue-400 text-white shadow-xl rounded-lg">
          Todo App Assignment
        </h1>
        <div className="max-w-4xl mx-auto p-5 bg-slate-300 mt-5 shadow-2xl shadow-red-600 rounded-lg border-2">
          <h1 className="text-center text-[30px] sm:text-[40px] underline font-serif bg-pink-400 italic shadow-xl rounded-lg">
            Todo App
          </h1>
          <div className="flex flex-col sm:flex-row justify-between gap-5 mt-5">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInput(e.target.value)}
              className="w-full sm:w-[60%] p-2 text-lg border-b focus:outline-none"
              placeholder="Write movie name"
            />
            <input
              type="number"
              value={id}
              onChange={(e) => setId(Number(e.target.value))}
              className="w-full sm:w-[20%] p-2 text-lg border-b focus:outline-none"
              placeholder="Write Id"
            />
            <button
              onClick={addItem}
              className="bg-blue-700 hover:bg-blue-300 text-white p-2 w-full sm:w-[20%] rounded-md"
            >
              Add Movie
            </button>
          </div>
          <h1 className="text-center text-[30px] sm:text-[40px] underline font-serif italic mt-5 bg-pink-400 shadow-xl rounded-lg">
            Movie List
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            {todos.map((item, i) => (
              <div className="bg-yellow-300 shadow p-4 rounded-lg" key={item.id}>
                <div className="flex justify-between text-lg">
                  <span className="shadow rounded-full h-8 w-8 text-center text-blue-700">
                    {i + 1}
                  </span>
                  <span
                    onClick={() => delItem(item.id)}
                    className="shadow rounded-full h-8 w-8 text-center cursor-pointer text-red-700"
                  >
                    X
                  </span>
                </div>
                <div className="mt-5 text-[20px] sm:text-[30px] text-red-700 italic font-semibold">
                  {item.movie}
                </div>
                <div>
                  <h2
                    onClick={() => editItem(item.id)}
                    className="text-right cursor-pointer font-semibold"
                  >
                    Edit
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center p-14">
          <footer className="text-blue-700 text-sm sm:text-lg">
            Made by Aqeel Ahmed Baloch
          </footer>
        </div>
      </div>
    );
  };

  // Render TodoApp
  return <TodoApp />;
}
