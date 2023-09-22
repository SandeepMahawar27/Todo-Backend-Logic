const express = require("express")
const app = express();

//load config form env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo API's routes
app.use("/api/s1", todoRoutes);

//app listen port
app.listen(PORT, () => {
    console.log(`server started...${PORT}`);
})

//db connection  
const dbConnect = require("./config/database");
dbConnect();

//default routes
app.get("/", (req,res) => {
    res.send(`<h1>This is my Home Page</h1>`) 
}) 