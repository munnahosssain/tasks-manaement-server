const express = require("express");
const router = express.Router();
const tasksController = require("../../controller/tasks.controller");

/**
 * @api {get} /tasks all tasks
 * @paiDescription get all the tasks
 * @apiPermission admin
 *
 * @apiHeader {String} Authorize User's access token
 *
 * @apiParam {Number{1-}}          [page = 1] List page
 * @apiParam {Number{1-100}}       [limit = 10] User per page
 *
 * @apiSuccess {Object[]} all the tasks.
 *
 * @apiError (Unauthorize 401) Unauthorize Only authorize users can access the data
 * @apiError (Forbidden 403) Forbidden Only admin can access the data
 */

router.route("/").get(tasksController.getTasks);

module.exports = router;
