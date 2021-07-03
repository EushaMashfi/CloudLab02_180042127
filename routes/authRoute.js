const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const {
    getDashboard,
    getHomePage,
    getLogin,
    getRegister,
    postLogin,
    postRegister,
    logout,
} = require("../Controller/authController");

const isLoggedIn = require("../middlewares/authMiddleware");
const pageNotFound = require("../Controller/noPageController");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", getHomePage);

//router.get('/dashboard', getDashboard);
router.use("/dashboard", isLoggedIn, getDashboard);

router.route("/login").get(getLogin).post(postLogin);
router.route("/register").get(getRegister).post(postRegister);

router.get("/logout", logout);
// router.get("/", (req, res) => {
//     res.render("index.ejs", { root: "./views" });
// });

router.use(pageNotFound);

module.exports = router;
