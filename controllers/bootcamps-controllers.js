/*
* Desc: Get all bootcamp controller
* Method: GET
* Route: /api/v1/bootcamps
* Access: public
 */
exports.getBootcamps = async (req, res) => {
  await res.status(200).json({success: true, msg: `Showing all bootcamps`, hello: req.hello});
};

/*
* Desc: Create bootcamp controller
* Method: POST
* Route: /api/v1/bootcamps
* Access: private
 */
exports.createBootcamp = async (req, res) => {
   await res.status(200).json({success: true, msg: `Created new bootcamp`})
};

/*
* Desc: Get single bootcamp controller
* Method: GET
* Route: /api/v1/bootcamps
* Access: public
 */
exports.getSingleBootcamp = async (req, res) => {
   await res.status(200).json({success: true, msg: `Showing only single bootcamp ${req.params.id}`});
};

/*
* Desc: Update bootcamp controller
* Method: PUT
* Route: /api/v1/bootcamps
* Access: private
 */
exports.updateBootcamp = async (req, res) => {
     await res.status(200).json({success: true, msg: `Updated bootcamp ${req.params.id}` });
};

/*
* Desc: Delete bootcamp controller
* Method: DELETE
* Route: /api/v1/bootcamps
* Access: private
 */
exports.deleteBootcamp = async (req, res) => {
   await res.status(200).json({success: true, msg: `Deleted bootcamp ${req.params.id}` });
};
