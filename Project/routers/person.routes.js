const Router = require ('express')
const router = new Router()
const UserController = require ('../controller/person.controller')
const userController = require('../controller/person.controller')


router.post('/users', userController.createUser)
router.get('/users', userController.getUsers)
router.get('/users/:user_id', userController.getOneUser)
router.put('/users', userController.updateUser)
router.delete('/users/:user_id', userController.createUser)





module.exports = router