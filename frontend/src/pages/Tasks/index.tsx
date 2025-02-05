import { ChangeEvent, FormEvent, useState } from "react";
import { FaPlus } from "react-icons/fa";

interface ITasks {
    id: string;
    name: string;
    comments: string;
}


const data: ITasks[] = [
    {
        id: crypto.randomUUID(),
        name: "Tasks 1",
        comments: `lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        repudiandae vitae, aliquid consequuntur modi dolor assumenda
        mollitia quod vel quaerat dolores, veniam natus. Necessitatibus
        vel atque autem aspernatur perferendis? Quae.`
    },
    {
        id: crypto.randomUUID(),
        name: "Tasks 2",
        comments: `lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        repudiandae vitae, aliquid consequuntur modi dolor assumenda
        mollitia quod vel quaerat dolores, veniam natus. Necessitatibus
        vel atque autem aspernatur perferendis? Quae.`
    },
    {
        id: crypto.randomUUID(),
        name: "Tasks 3",
        comments: `lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        repudiandae vitae, aliquid consequuntur modi dolor assumenda
        mollitia quod vel quaerat dolores, veniam natus. Necessitatibus
        vel atque autem aspernatur perferendis? Quae.`
    }
] 

export const Tasks = () => {

    const [task, setTask] = useState<ITasks>({
        id: "",
        name: "",
        comments: ""
    });

    const [tasks, setTasks] = useState<ITasks[]>(data);

    const addTasks = ( task : ITasks) => {

        setTasks((prev) => [
            task,
            ...prev,
        ]);

        setTask({
            id: "",
            name: "",
            comments: ""
        })
    };

    const handleChange = ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        
        const { name, value } = e.target;

        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }))

    }

    const handleSubmit = (e: FormEvent) => {
        try {
            e.preventDefault();

            
            addTasks({ 
                ...task,
                id: crypto.randomUUID(), 
            });
            

        } catch(error){
            
            console.log(error);
        }
    }
    

  return (
    <section className="w-full flex flex-col gap-1">
      <header className="flex justify-end"> 
        <form
        onSubmit={handleSubmit}
        className="w-full border flex gap-1"
        >
            <section>
                <input
                placeholder="Name" 
                type="text" 
                name="name"
                value={task.name}
                onChange={handleChange}
                />
            </section>
            <section>
                <textarea
                placeholder="Comments"
                name="comments"
                value={task.comments}
                onChange={handleChange}
                ></textarea>
            </section>
            <section>
                <button>Crear</button>
            </section>
        </form>
        {/* <button className="flex border p-1 rounded gap-1 items-end active:scale-95 transition-all cursor-pointer">
          <FaPlus size={20} />
          Crear Tarea
        </button> */}
      </header>
      <section className="w-full grid grid-cols-3 gap-3 p-1">
        
        {
            tasks.map((task) => (
            <div key={task.id} className="flex flex-col gap-3 border p-1">
                <section
                className="flex justify-between overflow-x-hidden"
                >
                <h3> { task.name } </h3>
                <span className="font-bold trucate">ID: { task.id }</span>
                </section>
                <section>
                    <p>
                        { task.comments }
                    </p>
                </section>
            </div>
            ))
        }
      </section>
    </section>
  );
};
