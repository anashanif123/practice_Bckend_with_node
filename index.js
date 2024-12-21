import express from "express";
import  morgan  from "morgan";
const inform = [
  {
    id: "1",
    name: "John",
  },
  {
    id: "2",
    name: "kon",
  },
  {
    id: "3",
    name: "ustad",
  },
];

const app = express();
const PORT = 4000;


app.use(morgan('tiny'))
app.use(express.json())
//app level middel ware
function middleWare(req, res, next) {
   req.requestbuy = "anashanif"
    next();
}

app.get("/",middleWare, (req, res) => {
    console.log(req.requestbuy);
    
  res.status(200).send(inform);
});

app.post("/", (req, res) => {
    console.log(req.body);
    
  res.send("Hello post  first API");
});
app.put("/", (req, res) => {
  res.send("Hello put  first API");
});
app.delete("/", (req, res) => {
  res.send("Hello delete  first API");
});
app.listen(PORT, () => console.log("server is running or port" + PORT));
