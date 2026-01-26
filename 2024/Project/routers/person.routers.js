const { Router } = require("express");
const personController = require("../controller/person.controller");
const router = new Router();
console.log(personController);

router.post("/person", personController.createPerson);
router.get("/person", personController.getPerson);
router.get("/person/:person_id", personController.getOnePerson);
router.put("/person", personController.updatePerson);
router.delete("/person/:person_id", personController.deletePerson);

module.exports = router;
