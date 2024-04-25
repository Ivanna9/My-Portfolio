const { Router } = require('express');
const history_brController = require('../controller/history_br.controller');
const router = new Router();
console.log(history_brController)

 router.post('/history_br', history_brController.createHistory_br);
 router.get('/history_br', history_brController.getHistory_br);
 router.get('/history_br/:history_br_id', history_brController.getOneHistory_br);
 router.put('/history_br', history_brController.updateHistory_br);
 router.delete('/history_br/:history_br_id', history_brController.deleteHistory_br);

module.exports = router;

