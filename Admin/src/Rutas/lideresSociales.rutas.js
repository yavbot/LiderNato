const express = require("express");

const router = express.Router();
const {
 renderLiderando
} = require("../controladores/lideresSociales.controlador");

router.get("/lideresSociales", renderLiderando);

module.exports = router;
