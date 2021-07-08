const express = require('express');
const router = express.Router();
const detailHandler = require('../handler/detail');
const  userData  = require('../utils/userData')



router.get('/', function(req,res){
    res.send("yo this is test project");

}); 
router.post('/authenticate', authenticate);
router.get('/users/:email',detailHandler.getUser);
router.get('/users',detailHandler.getUsers);
router.post('/users',detailHandler.addUser);
router.delete('/users/:email',detailHandler.deleteUser);

function authenticate(req, res, next) {
    userData.authentication(req.body)
        .then(user => res.json(user))
        .catch(next);
}

module.exports = router;