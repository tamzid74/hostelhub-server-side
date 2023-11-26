const createAuthCookie = require("../api/authentication/controllers/createAuthCookie");
const logout = require("../api/authentication/controllers/logout");


const router = require("express").Router();
router.post("/jwt", createAuthCookie);
router.post("/logout", logout);

module.exports = router;
