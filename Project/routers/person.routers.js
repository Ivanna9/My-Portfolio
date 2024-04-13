const { Router } = require('express');
const router = Router();
const personController = require('../controller/person.controller');

router.post('/persons', personController.createPerson);
router.get('/persons', personController.getPersons);
router.get('/persons/:person_id', personController.getOnePerson);
router.put('/persons/:person_id', personController.updatePerson);
router.delete('/persons/:person_id', personController.deletePerson);

module.exports = router;
