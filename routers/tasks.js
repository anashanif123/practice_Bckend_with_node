import express from "express";
const router = express.Router();
import sendResponse from "../helpers/sendResponse.js";
import Task from "../models/task.js";

router.post("/", async (req, res) => {
  const { task } = req.body;
  let newTask = new Task({ task });
  newTask = await newTask.save();
  sendResponse(201, res, newTask, false, "task added successfully");
});
router.get("/", async (req, res) => {
  let tasks = await Task.find();
  sendResponse(200, res, tasks, false, "task fetched successfully");
});
router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if(!task)return  sendResponse(400, res, null, true, "task not found ");
  sendResponse(200, res, task, false, "task fetched successfully");

});
router.put("/:id", async (req, res) => {
  const {task , completed} = req.body
  const taskfromDb = await Task.findById(req.params.id);
  if(!taskfromDb)return  sendResponse(400, res, null, true, "task not found ");
  if(task) taskfromDb.task = task ;
  if(completed) taskfromDb.completed = completed ;
  await taskfromDb.save();
  
  sendResponse(200, res, taskfromDb, false, "task updated successfully");

});
router.delete("/:id", async (req, res) => {
  const taskfromDb = await Task.findById(req.params.id);
  if(!taskfromDb)return  sendResponse(400, res, null, true, "task not found ");
  await Task.deleteOne({ _id: req.params.id});
  
  sendResponse(200, res, null, false, "task deleted successfully");

});
export default router;
