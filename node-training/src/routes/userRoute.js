const { Router } = require("express");
const { register } = require("../controller/userController");

const router = Router();

// GET all todos
router.post("/", register);

module.exports = router;
