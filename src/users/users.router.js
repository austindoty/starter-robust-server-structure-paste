const router = require("express").Router();

const controller = require("./users.controller");

const pastesRouter = require("../pastes/pastes.router");//added

router.use("/:userId/pastes", controller.userExists, pastesRouter);//add

router.route("/:userId").get(controller.read);

router.route("/").get(controller.list);

module.exports = router;