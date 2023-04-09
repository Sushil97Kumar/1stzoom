import { string } from "joi";

let Joi = require('joi');

export {};

const AddCameraJoiSchema = Joi.object().keys({
    name: Joi.string().required().max(10).label('Enter the name'),
    description: Joi.string().allow(null, ''),
    url: Joi.string().max(10).allow(null, ''),
})

const CameraListingByIdJoiShema = Joi.object().keys({
    id : Joi.string().required().label('Enter camera Id'),
   
})
const UpdateCameraByIdJoiSchema = Joi.object().keys({
  id : Joi.string().required().label('Enter camera Id'),
  name: Joi.string().max(10).allow(null, '').label('Enter the Camera name') ,
    description: Joi.string().max(10).allow(null, '') ,
    url: Joi.string().max(10).allow(null, '').label('url'),
   

})

const DeletedCameraJoiSchema = Joi.object().keys({
  id : Joi.string().required().label('Enter camera Id'),
  
})


module.exports  = {AddCameraJoiSchema,CameraListingByIdJoiShema,UpdateCameraByIdJoiSchema,DeletedCameraJoiSchema}

