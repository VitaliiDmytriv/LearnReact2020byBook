import "./style/index.css";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import Input from "./components/input";
import TasksList from "./components/tasksList";
import DayOfTheWeek from "./components/date";

function CreateNewTask(value) {
    this.value = value;
    this.id = nanoid(5);
    this.done = false;
    this.time = Date.now();
}

function App() {
    const inputRef = useRef(null);

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleInputClick(e) {
        const { value } = inputRef.current;
        if (e.code === "Enter" && value.length !== 0) {
            const newTask = new CreateNewTask(value);
            addNewTask(newTask);
            inputRef.current.value = "";
        }
    }

    console.log(tasks);

    function addNewTask(newTask) {
        setTasks((prev) => {
            return [...prev, newTask];
        });
    }

    function handleClick(e) {
        console.log(e);
    }

    console.log(
        Intl.DateTimeFormat("en-US", {
            weekday: "long",
            day: "numeric",
            hourCycle: "h24",
            hour: "numeric",
            minute: "2-digit",
        }).format(Date.now())
    );

    console.log(<DayOfTheWeek />);

    // return (
    //     <>
    //         <main>
    //             <section className="max-w-3xl bg-main m-auto p-3 min-h-screen">
    //                 <h1
    //                     onClick={handleClick}
    //                     className="text-center text-4xl mb-2"
    //                 >
    //                     Things to do
    //                 </h1>
    //                 <DayOfTheWeek />
    //                 <div>
    //                     <Input
    //                         reference={inputRef}
    //                         handleInputClick={handleInputClick}
    //                     />
    //                 </div>
    //                 <img src="" alt="" />
    //                 <div className="px-1 py-3">
    //                     {tasks.length ? (
    //                         <TasksList tasks={tasks} />
    //                     ) : (
    //                         <h4 className="italic">No tasks</h4>
    //                     )}
    //                 </div>
    //             </section>
    //         </main>
    //     </>
    // );
}

export default App;
