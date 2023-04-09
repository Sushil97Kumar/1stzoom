
export { };
const {addCameraNetwork,cameraNetworkListingByCameraId,allcameraNetworkListing,updateCameraNetworkInfo,deleteCameraNetwork} = require("../Controllers/cameranetwork.controller")
const {AddCameraNetworkJoiSchema,CameraNetworkListingByIdJoiShema,UpdateCameraNetworkByIdJoiSchema,DeletedCameraNetworkJoiSchema} = require("../core/validations/cameranetwork.validations")
const validateRequest = require('../core/middlewares/validateRequest')
// Routes =============================================================
module.exports = function (router) {
    router.post("/api/cameranetwork/addcameranetwork", [validateRequest(AddCameraNetworkJoiSchema)], addCameraNetwork);
    router.get("/api/cameranetwork/listingbycameranetworkid", [validateRequest(CameraNetworkListingByIdJoiShema)], cameraNetworkListingByCameraId);
    router.get("/api/cameranetwork/allcameranetworklisting", allcameraNetworkListing);
    router.put("/api/cameranetwork/update", [validateRequest(UpdateCameraNetworkByIdJoiSchema)], updateCameraNetworkInfo);
    router.delete("/api/cameranetwork/deletecameranetwork", [validateRequest(DeletedCameraNetworkJoiSchema)], deleteCameraNetwork);

};
