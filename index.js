import express from "express";
import morgan from "morgan";
import 'dotenv/config'
import taskRoutes from "./routers/tasks.js"

// import userRoutes from "./routers/users.js";
import mongoose, { Mongoose } from "mongoose";
const inform = [
  {
    id: "1",
    name: "John",
    completed: "true",
  },
  {
    id: "2",
    name: "kon",
    completed: "false",
  },
  {
    id: "3",
    name: "ustad",
    completed: "true",
  },
];

const app = express();
const PORT = 4000;
// console.log("mongodb",process.env.MONGODBURI);
mongoose.connect(process.env.MONGODBURI).then(()=>console.log("mongodb connect"))
app.use(morgan("tiny"));
app.use(express.json());
//app level middel ware
// function middleWare(req, res, next) {
//    req.requestbuy = "anashanif"
//     next();
// }

// app.use("/user", userRoutes);
app.use("/task" , taskRoutes)
// paramas
// app.get("/singleTask/:id", (req, res) => {
//   const infor = inform.find((data) => data.id == req.params.id);
//   if (!infor) return res.status(404).send("Not found");
//   res.status(200).send(infor);
// });
// // query
// app.get("/", (req, res) => {
//   console.log("req.wuery", req.query);
//   const { completed } = req.query;
//   let filter = inform;
//   if (completed) {
//     filter = inform.filter((data) =>
//       completed == "true" ? data.completed === true : data.completed === false);
//   }
//   res.status(200).send(filter);
// });
// app.post("/", (req, res) => {
//     console.log(req.body);

//   res.send("Hello post  first API");
// });
// app.put("/", (req, res) => {
//   res.send("Hello put  first API");
// });
// app.delete("/", (req, res) => {
//   res.send("Hello delete  first API");
// });
app.listen(PORT, () => console.log("server is running or port" + PORT));
