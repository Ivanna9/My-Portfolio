const { Router } = require('express');
const breakdownController = require('../controller/breakdown.controller');
const router = new Router();
console.log(breakdownController)

 router.post('/breakdown', breakdownController.createBreakdown);
 router.get('/breakdown', breakdownController.getBreakdownsByPerson);

module.exports = router;
