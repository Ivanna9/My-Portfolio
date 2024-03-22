const Router = require ('express')
const router = new Router()
const UserController = require ('../controller/user.controller')
const userController = require('../controller/user.controller')


router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:user_id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:user_id', userController.createUser)





module.exports = router