const router = require("express").Router();
const controller = require("../controller/control");

router.get("/", controller.OpenPageRes);
router.post("/register", controller.register);
router.post("/finduser", controller.finduser);

module.exports = router;
