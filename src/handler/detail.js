const Response = require('../response');
const user = require('../models/user');
const updateServices = require("../services/userService");


const addUser = async (req,res)=> {
    console.log("req is",req.body);
    const response = new Response();
    updateServices.addUser(req.body).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "User Attached";
        res.status(200).json(response);
    })
}

const getUser = async (req,res)=> {
    const response = new Response(req);
    updateServices.getUser(req.params).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "User Fetched";
        res.status(200).json(response);
    })
}

const getUsers = async (req,res)=> {
    const response = new Response();
    updateServices.getUsers().then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "Users Fetched";
        res.status(200).json(response);
    })
}

const deleteUser = (req,res)=> {
    const response = new Response();
    updateServices.deleteUser(req.params).then((data)=>{
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "User Deleted";
        res.status(200).json(response);
    })
}

module.exports = {
    addUser, getUser, getUsers, deleteUser
}