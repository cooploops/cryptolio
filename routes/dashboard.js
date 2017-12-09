// dashboard will only show current coins owned

const express = require('express');
const router  = express.Router();
const passport = require('../config/passport');
const isAuthenticated = require('../config/middleware/isAuthenticated');

const dashboard_controller = require('../controllers/dashboard_controller');
const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/', isAuthenticated, dashboard_controller.index);
router.get('/signup', dashboard_controller.signupPage);
router.get('/sign-out', dashboard_controller.signout);
// router.post('/addCoin', dashboard_controller.addCoin)
// router.get('/', dashboard_controller.allcoin);

router.post('/signup',dashboard_controller.signUpUser);
router.post('/login', passport.authenticate('local'), dashboard_controller.loginUser);

// router.get('/', isAuthenticated, dashboard_controller.index); will use this when authenication is implemented
// router.post('/new', dashboard_controller.search);

module.exports = router;