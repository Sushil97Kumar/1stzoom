

const {addCamera,cameraListingByCameraId,allcameraListing,updateCameraInfo,deleteCamera} = require("../Controllers/camera.controller")
const {AddCameraJoiSchema,CameraListingByIdJoiShema,UpdateCameraByIdJoiSchema,DeletedCameraJoiSchema} = require("../core/validations/camera.validations")
const validateRequest = require('../core/middlewares/validateRequest')
// Routes =============================================================
module.exports = function (router) {
    router.post("/api/camera/addcamera", [validateRequest(AddCameraJoiSchema)], addCamera);
    router.get("/api/camera/listingbycameraid", [validateRequest(CameraListingByIdJoiShema)], cameraListingByCameraId);
    router.get("/api/camera/allcameralisting", allcameraListing);
    router.put("/api/camera/updatecamerainformation", [validateRequest(UpdateCameraByIdJoiSchema)], updateCameraInfo);
    router.delete("/api/camera/deletecamera", [validateRequest(DeletedCameraJoiSchema)], deleteCamera);

};
