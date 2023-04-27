const router = require('express').Router();
const userController = require('./../controllers/userController');

router.post('/', userController.create)
router.get('/', userController.list)

module.exports = router;