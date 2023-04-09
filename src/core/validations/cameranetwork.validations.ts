
let Joi = require('joi');

export {};

const AddCameraNetworkJoiSchema = Joi.object().keys({
    name: Joi.string().required().max(10).label('Enter the name'),
    description: Joi.string().allow(null, ''),
    camera_id: Joi.string().label('Enter the camera id'),
})

const CameraNetworkListingByIdJoiShema = Joi.object().keys({
    id : Joi.string().required().label('Enter camera Id'),
   
})
const UpdateCameraNetworkByIdJoiSchema = Joi.object().keys({
  id : Joi.string().required().label('Enter camera Id'),
  name: Joi.string().max(10).allow(null, '').label('Enter the Camera name') ,
    description: Joi.string().max(10).allow(null, '') ,
   
   

})

const DeletedCameraNetworkJoiSchema = Joi.object().keys({
  id : Joi.string().required().label('Enter camera Id'),
  
})


module.exports  = {AddCameraNetworkJoiSchema,CameraNetworkListingByIdJoiShema,UpdateCameraNetworkByIdJoiSchema,DeletedCameraNetworkJoiSchema}

