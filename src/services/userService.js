const users = require("../models/user");

function addUser(req) {
    return new Promise((resolve, reject) => {
        const user = new users(req);
        user.save((err, result) => {
            if (!err) {
                console.log("Data inserted is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}

function getUsers() {
    return new Promise((resolve, reject) => {
        users.find({}, (err, result) => {
            if (!err) {
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}

function getUser(req) {
    return new Promise((resolve, reject) => {
        users.find({ "email": req.email }).
            then((result) => {
                resolve(result);
            }).catch((err) => {
                //console.log("error is " + err);
                reject(error);
            })
    })
}

function deleteUser(req) {
    return new Promise((resolve, reject) => {
        users.deleteOne({ "email": req.email }, (err, result) => {
            if (!err) {
                //console.log("Data from DB is ", result);
                resolve(result);
            }
            else {
                reject(err);
            }
        });
    })
}



module.exports = {
    addUser,getUsers,getUser,deleteUser
}