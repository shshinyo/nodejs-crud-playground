const express = require('express');
const router = express.Router();
const usrController = require('../controllers/usrController');


router.get('/users', usrController.getusrs);
router.get('/users/:id', usrController.getusr);
router.post('/users/add',usrController.addusr);
router.delete('/users/:id',usrController.deleteusr);
router.put('/users/:id',usrController.updateusr);


module.exports = router;