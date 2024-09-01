const express=require("express");
const mainRouter=express.Router();
const userRouter=require("./user.router");
const repoRouter=require("./repo.router");
const issueRouter=require("./issues.router");
mainRouter.use(userRouter);
mainRouter.use(repoRouter);
mainRouter.use(issueRouter);
mainRouter.get("/",(req,res)=>{
    res.send("Welcome to the main page");
});

module.exports=mainRouter;