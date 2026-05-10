const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({

  host:"localhost",

  user:"root",

  password:"",

  database:"studyzen"

});

db.connect((err)=>{

  if(err){

    console.log(err);

  }else{

    console.log("MySQL Connected");

  }

});

app.get("/", (req,res)=>{

  res.send("StudyZen Backend Running");

});

app.post("/addTask", (req,res)=>{

  const task = req.body.task;

  const sql =
  "INSERT INTO tasks (task_name) VALUES (?)";

  db.query(sql,[task],(err,result)=>{

    if(err){

      console.log(err);

      res.send("Database Error");

    }else{

      res.send("Task Added");

    }

  });

});

app.listen(5000, ()=>{

  console.log("Server Running");

});