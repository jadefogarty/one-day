const express = require('express');
const router = express.Router();
const date_controller = require('../controllers/date_controller');

//GET Index Page
router.get('/', date_controller.date_index);

// //GET/POST Create Page
// router.get('/review/create', review_controller.review_create_get);
router.get('/date', date_controller.search_date);
// // GET/POST Delete Page
// router.get('/review/delete/:id', review_controller.review_delete_get);
// router.post('/review/delete/:id', review_controller.review_delete_post);
// // GET/POST Update Page
// router.get('/review/update/:id', review_controller.review_update_get);
// router.post('/review/update/:id', review_controller.review_update_post);

module.exports = router;