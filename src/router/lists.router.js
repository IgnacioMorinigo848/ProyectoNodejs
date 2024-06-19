const express = require('express');
const router = express.Router();
const listsController = require("../controller/lists.controller.js");


router.get("/favorites/get", listsController.getFavorites);
router.post("/favorites/add", listsController.addFavorites);
router.delete("/favorites/delete", listsController.deleteFavorites);

router.get("/watchLater/get", listsController.getWatchLater);
router.post("/watchLater/add", listsController.addWatchLater);
router.delete("/watchLater/delete", listsController.deleteWatchLater);

router.get("/watched/get", listsController.getWatched);
router.post("/watched/add", listsController.addWatched);
router.delete("/watched/delete", listsController.deleteWatched);


module.exports = router