const express =require('express');
require('dotenv').config();
const cors=require('cors');
const blogRouter=require('./route/blog-route');
require('./db');
const app=express();
const port=process.env.PORT;
app.use(cors());
app.use(express.json());
app.use('/api/blogs',blogRouter);
app.use('/api',(req,res)=>{
    res.send('Hello');
});
app.listen(port,()=>console.log(`App is running at port ${port}`));