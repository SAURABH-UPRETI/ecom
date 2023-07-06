const { Router } = require('express');

const router = Router();


// GET
router.get('/', controllers.getIndex);
router.get('/shop', controllers.getShop);
router.get('/categoris/:categoryID', controllers.getCategoryByID);
router.get('/mens', controllers.getMens);
router.get('/womens', controllers.getWomens);
router.get('/kids', controllers.getKids);
//POST
router.post('/signup', controllers.postSignup);
router.post('/signup', controllers.postLogin);

module.exports = router;