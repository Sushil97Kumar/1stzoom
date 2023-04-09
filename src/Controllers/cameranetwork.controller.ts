const _ = require('lodash');
require('dotenv').config()
const mongoose = require("mongoose");
const { apiResponse } = require("../core/response/response")
const { SUCCESS, REDIRECTION, CLIENT_ERROR, SERVER_ERROR } = require("../core/response/statusCode")
const { ERROR_MSG, SUCCESS_MSG } = require("../core/response/messages")

const { CameraNetwork } = require("../Models/cameranetwork")
export { };
// add camera Network in db
/**
 * @SushilKumar
 *
 */
exports.addCameraNetwork = async (req, res) => {
  const { name, description, url } = req.body;
  //save camera 
  let newCameraNetworkAdded = new CameraNetwork(_.pick(req.body, ['name', 'description','camera_id']));
  newCameraNetworkAdded.save(async function (err, cameranet) {
    if (err) return apiResponse(res, true, [], ERROR_MSG['SYSTEM-ERROR'], SERVER_ERROR.internalServerError, 0, [])
    return apiResponse(res, false, [], '', SUCCESS.OK, 0, cameranet)
  });
}

//Camera Listing By camera network id

exports.cameraNetworkListingByCameraId = async (req, res) => {
  try {
    const { id } = req.body
    let page, limit: number;
    page = req.query.page ? parseInt(req.query.page) - 1 : 0;
    limit = 10;
    var filteredQuery = {}
    filteredQuery = {
      is_deleted: false,
      _id: mongoose.Types.ObjectId(id)
    }
    const [data, count] = await Promise.all([
        CameraNetwork.find(filteredQuery).populate({path:"camera_id", select:{name:1,description:1,url:1}}).sort({ createdAt: -1 }).skip(page * limit).limit(limit),
        CameraNetwork.countDocuments(filteredQuery)
    ]);
    return apiResponse(res, false, [], '', SUCCESS.OK, count, data)
  } catch (error) {
    console.log('err', error)
    return apiResponse(res, true, [], ERROR_MSG['SYSTEM-ERROR'], SERVER_ERROR.internalServerError, 0, [])
  }
}

// listing of all cameras
exports.allcameraNetworkListing = async (req, res) => {
  try {
    const { name, description } = req.body
    var filteredQuery = {}
    let page, limit: number;
    let fname_regex = new RegExp(name, 'i');
    let description_regex = new RegExp(description, 'i');

    if (req.query.search) {
      page = req.query.page ? parseInt(req.query.page) - 1 : 0;
      limit = 10;
      const filter_fname = (name && name != 'undefined') ? { name: fname_regex } : {};
      const filter_description = (description && description != 'undefined') ? { description: description_regex } : {};
      filteredQuery = { ...filter_fname, ...filter_description, is_deleted: true }
    } else {
      page = req.query.page ? parseInt(req.query.page) - 1 : 0;
      limit = 10;
      filteredQuery = {
        is_deleted: false,
      }
    }

    const [data, count] = await Promise.all([
        CameraNetwork.find(filteredQuery).populate({path:"camera_id", select:{name:1,description:1,url:1}}).sort({ createdAt: -1 }).skip(page * limit).limit(limit),
        CameraNetwork.countDocuments(filteredQuery)
    ]);
    return apiResponse(res, false, [], '', SUCCESS.OK, count, data)

  } catch (error) {
    console.log('err', error)
    return apiResponse(res, true, [], ERROR_MSG['SYSTEM-ERROR'], SERVER_ERROR.internalServerError, 0, [])
  }
}
// update Camera Network information
exports.updateCameraNetworkInfo = async (req, res) => {
  try {
    const { id, name, description, url } = req.body
    let condition = {}
    condition['_id'] = mongoose.Types.ObjectId(id);
    let record = await CameraNetwork.findOne(condition, { _id: 1 });
    if (record) {
      await CameraNetwork.findOneAndUpdate(condition, { $set: req.body }, { new: true })
      return apiResponse(res, false, [], 'updated successfully', SUCCESS.OK, 0)
    }
    return apiResponse(res, true, [], ERROR_MSG['NO-RECORD-FOUND'], CLIENT_ERROR.badRequest, 0, []);
  } catch (error) {
    return apiResponse(res, true, [], ERROR_MSG['SYSTEM-ERROR'], SERVER_ERROR.internalServerError, 0, [])
  }


}

// delete Cameras
exports.deleteCameraNetwork = async (req, res) => {
  try {
    const id = req.body.id;
    await CameraNetwork.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, { $set: { is_deleted: true, updatedAt: new Date() } }, { upsert: true, new: true }).then(cres => {
      if (cres) {
        return apiResponse(res, false, [], '', SUCCESS.OK, 0, [{ deleted: 'deleted successfully' }]);
      } else {
        return apiResponse(res, true, [], ERROR_MSG['SYSTEM-ERROR'], SERVER_ERROR.internalServerError, 0, [])
      }
    });
  } catch (err) {
    return apiResponse(res, true, [], ERROR_MSG['SYSTEM-ERROR'], SERVER_ERROR.internalServerError, 0, [])
  }
}

