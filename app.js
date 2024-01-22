import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import TASK_CONTROLLER from "./controllers/taskController.js";
import errorController from "./controllers/errorController.js";
const APP = express(),
  PORT = 3000;
APP.use(cors());
APP.use(helmet());
APP.use(morgan("dev"));

APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));

APP.get("/tasks", TASK_CONTROLLER.getAllTasks);
APP.post("/tasks", TASK_CONTROLLER.addTask);
APP.get("/tasks/:id", TASK_CONTROLLER.getTask);
APP.put("/tasks/:id", TASK_CONTROLLER.editTask);
APP.put("/tasks/completed/:id", TASK_CONTROLLER.completedTask);
APP.put("/tasks/uncompleted/:id", TASK_CONTROLLER.uncompletedTask);
APP.delete("/tasks/:id", TASK_CONTROLLER.deleteTask);

APP.use(errorController.error404);

APP.listen(PORT, () => {
  console.log(`API FUNCIONANDO EN http://localhost:${PORT}/tasks`);
});
