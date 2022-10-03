const express = require("express");

const router = express.Router();
const {
 renderLiderando
} = require("../controladores/liderando.controlador");

router.get("/liderando", renderLiderando);

module.exports = router;
