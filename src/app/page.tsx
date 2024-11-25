'use client'
import { useState } from "react";

export default function Home() {
  // define state
  const [todos, setTodos] = useState([
    { movie: "Django Uchained", id: 1 },
    { movie: "Catch me if you can", id: 2 },
  ]);

  const [inputVal,setInput] = useState("")
  const [id,setId] = useState(0)

  // function
  const addItem = ()=>{
    let obj :any = todos.find(item => item.id == id) 
    if(obj){
    let newArray = todos.filter(item =>item.id !== obj.id)
    setTodos([...newArray,{movie:inputVal,id:id}])
    setInput("")
    setId(0)
    return
    }
    setTodos([...todos,{movie:inputVal,id:id}])
    setInput("")
    setId(0)
  }
  const editItem =(id:any)=>{
    let obj :any = todos.find(item => item.id == id) 
    setInput(obj.movie)
    setId(obj.id)
  }
  const delItem = (id:any)=>{
    let newArray = todos.filter(item =>item.id !== id)
    setTodos([...newArray])
  }
  
  return (
    <div>
    <h1 className="text-center text-[30px] sm:text-[40px] font-serif bg-blue-400 text-white shadow-xl rounded-lg">Class Assignment</h1>
    <div className="max-w-4xl mx-auto p-5 bg-slate-300 mt-5 shadow-2xl shadow-red-600 rounded-lg border-2">
      <h1 className="text-center text-[30px] sm:text-[40px] underline font-serif bg-pink-400 italic shadow-xl rounded-lg">Todo App</h1>
      {/* Start Input Div */}
      <div className="flex flex-col sm:flex-row justify-between gap-5 mt-5">
        <input type="text" value={inputVal} onChange={(e) => setInput(e.target.value)} className="w-full sm:w-[60%] p-2 text-lg border-b focus:outline-none" placeholder="Write movie name"/>
        <input type="number" value={id} onChange={(e: any) => setId(e.target.value)} className="w-full sm:w-[20%] p-2 text-lg border-b focus:outline-none" placeholder="Write Id"/>
        <button onClick={addItem} className="bg-blue-700 hover:bg-blue-300 text-white p-2 w-full sm:w-[20%] rounded-md">Add Movie</button>
      </div>
      {/* End Input Div */}
      {/* Heading */}
      <h1 className="text-center text-[30px] sm:text-[40px] underline font-serif italic mt-5 bg-pink-400 shadow-xl rounded-lg">Movie List</h1>
      {/* Movie List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        {/* Grid items */}
        {todos.map((item: any, i: any) => {
          return (
            <div className="bg-yellow-300 shadow p-4 rounded-lg" key={i}>
              <div className="flex justify-between text-lg">
                <span className="shadow rounded-full h-8 w-8 text-center text-blue-700">{i + 1}</span>
                <span onClick={() => delItem(item.id)} className="shadow rounded-full h-8 w-8 text-center cursor-pointer text-red-700">X</span>
              </div>
              {/* Data Div */}
              <div className="mt-5 text-[20px] sm:text-[30px] text-red-700 italic font-semibold">{item.movie}</div>
              <div>
                <h2 onClick={() => editItem(item.id)} className="text-right cursor-pointer font-semibold">Edit</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="text-center p-14">
      <footer className="text-blue-700 text-sm sm:text-lg">Made by Aqeel Ahmed Baloch</footer>
    </div>
  </div>
  
  );
}
