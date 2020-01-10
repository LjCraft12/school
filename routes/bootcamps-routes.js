const express = require('express'),
    router = express.Router(),
    {getBootcamps, createBootcamp, getSingleBootcamp, updateBootcamp, deleteBootcamp} = require('../controllers/bootcamps-controllers');


// router.get('/', getBootcamps);
// router.post('/', createBootcamp);
// router.get('/:id', getSingleBootcamp);


// router.put('/', updateBootcamp);


// router.post('/', deleteBootcamp);

/*
* Desc: Get all bootcamp
* Method: GET
* Route: /api/v1/bootcamps
* Access: public

* Decs: Create new bootcamp
* Method: POST
* Route: /api/v1/bootcamps
* Access: Private
*/
router.route('/').get(getBootcamps).post(createBootcamp);


/*
* Desc: Get single bootcamp
* Method: GET
* Route: /api/v1/bootcamps/"id
* Access: Public

* Decs: Update bootcamp
* Method: PUT
* Route: /api/v1/bootcamps/:id
* Access: Private

* Decs: Delete bootcamp
* Method: DELETE
* Route: /api/v1/bootcamps/:id
* Access: Private
 */
router.route('/:id').get(getSingleBootcamp).put(updateBootcamp).delete(deleteBootcamp);

module.exports = router;
