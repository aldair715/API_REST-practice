let TASKS = [
  {
    id: 1,
    task: "Tarea 1",
    completed: true,
  },
];
const getAllTasks = (req, res) => {
    res.json({
      TASKS,
    });
  },
  getTask = (req, res) => {
    let id = parseInt(req.params.id),
      taskIndex = TASKS.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      res.json({ error: true, message: "Tarea no encontrada" });
    } else {
      res.json({
        error: false,
        message: "Tarea Encontrada",
        task: TASKS[taskIndex],
      });
    }
  },
  addTask = (req, res) => {
    if (req.body.title) {
      let { title } = req.body,
        id = TASKS.length + 1;
      TASKS.push({ id, title, completed: false });
      res.json({
        error: false,
        message: "Tarea Agregada",
      });
    } else {
      res.status(404).json({
        error: true,
        message: "Tarea no Enviada",
      });
    }
  },
  editTask = (req, res) => {
    let id = parseInt(req.params.id),
      title = req.body.title,
      taskIndex = TASKS.findIndex((task) => task.id === id);
    if (taskIndex) {
      res.status(404).json({ error: true, message: "Tarea no Encontrada" });
    } else {
      if (title) {
        TASKS[taskIndex].task = title;
        res.json({ error: false, message: "Tarea editada correctamente" });
      } else {
        res.json({
          error: true,
          message: "Contenido de la nueva tarea no Enviado",
        });
      }
    }
  },
  completedTask = (req, res) => {
    let id = parseInt(req.params.id),
      task = TASKS.find((task) => task.id === id);
    if (task) {
      task.completed = true;
      res.json({ error: false, message: "Tarea completada" });
    } else {
      res.status(404).json({ error: true, message: "Tarea no encontrada" });
    }
  },
  uncompletedTask = (req, res) => {
    let id = parseInt(req.params.id),
      task = TASKS.find((task) => task.id === id);
    if (task) {
      task.completed = false;
      res.json({ error: false, message: "Tarea desmarcada" });
    } else {
      res.status(404).json({ error: true, message: "Tarea no encontrada" });
    }
  },
  deleteTask = (req, res) => {
    let id = parseInt(req.params.id),
      taskIndex = TASKS.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      res.json({ error: true, message: "Tarea no encontrada" });
    } else {
      TASKS = TASKS.filter((task) => task.id !== id);
      res.json({ error: false, message: "Tarea Eliminada" });
    }
  };
export default {
  getAllTasks,
  getTask,
  addTask,
  editTask,
  completedTask,
  uncompletedTask,
  deleteTask,
};
