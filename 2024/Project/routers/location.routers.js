const { Router } = require("express");
const locationController = require("../controller/location.controller");
const router = new Router();
console.log(locationController);

router.post("/location", locationController.createLocation);
router.get("/location", locationController.getLocationById);

module.exports = router;
