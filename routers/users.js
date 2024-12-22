import express from "express";

const router = express.Router();

const users = [
  {
    fullname: "anashanif",
    email: "anashanif@gmail.com",
    id:1,  
},
];
// Get all users
router.get("/", (req, res) => {
  res.status(200).json({
    error: false,
    data: users,
    message: "Users fetched successfully",
  });
});

router.post("/", (req, res) => {
  const { fullname, email } = req.body;
  users.push({ fullname, email , id : users.length + 1 });
  res.status(201).json({
    error: false,
    data: users,
    message: "Users added successfully",
  });
});


router.get("/:id", (req, res) => {
    const user = users.find((data)=> data.id == req.params.id);
    if (!user) {
        return res.status(404).json({            
      error: true,
      data: null,
      message: "Users not found",
    })}
    res.status(201).json({            
        error: false,
        data: user,
        message: "Users found successfully",
      })}
);
  
export default router;
  