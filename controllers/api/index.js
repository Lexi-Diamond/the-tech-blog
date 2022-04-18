const router = require("express").Router();
const userRoutes = require("./user-routes");
const recipeRoutes = require("./recipeRoutes");

router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);

module.exports = router;
