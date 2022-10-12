const express = require ('express');
const { CreateAccount, DataOfUsers, EditUser, DeleteUser } = require('../controller/user.controller');
const router = express.Router();

router.get('/user',DataOfUsers);
router.post('/user',CreateAccount);
router.put('/user',EditUser);
router.delete('/user',DeleteUser);

module.exports = router;