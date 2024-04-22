const { Router } = require('express');
const technicalController = require('../controller/technical.controller');
const router = new Router();
console.log(technicalController)

 router.post('/technical', technicalController.createTechnical);
 router.get('/technical', technicalController.getTechnical);
 router.get('/technical/:technical_id', technicalController.getOneTechnical);
 router.put('/technical', technicalController.updateTechnical);
 router.delete('/technical/:technical_id', technicalController.deleteTechnical);

module.exports = router;
    