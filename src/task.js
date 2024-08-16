//traernos la lista de tareas del almacenamiento local
let task = JSON.parse(localStorage.getItem("task")) || [];

//funcion para agregar una tarea 
export const addTask = (task) =>{
    const newTask = {
        id: Date.now(),
        text: task,
        completed:false,
    };
    task.push(newTask);
    localStorage.setItem("Task", JSON.stringify(task));
};

//Funcion para eliminar una tarea
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("task", JSON.stringify(task));
};

//funcion para actualizar la tarea
export const toggleTask = (id) => {
    task = task.map((task) => {
        if(task.id == parseInt(id)){
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("task",JSON.stringify(task));
};
//funcion para llevar las tareas
export const getTask = () => task;

