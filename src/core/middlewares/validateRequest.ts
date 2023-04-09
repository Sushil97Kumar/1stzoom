import { any } from "joi";

//let createValidator = require('../validations/createValidator')
const {apiResponse} = require('../response/response')
const { SUCCESS, REDIRECTION, CLIENT_ERROR, SERVER_ERROR } = require("../response/statusCode")
const {ERROR_MSG} = require("../response/messages")
export {};

let validateRequest = (schema:any) =>
  async (req:any, res:any, next:any) => {
    try{
      let payload = req.body
      let regex = /"/g;
      //const requestValidated = await schema.validate(payload, {abortEarly: false});
      const requestValidated = await schema.validate(payload);
      if(requestValidated.error){
        const array = (requestValidated.error.details || [])
        console.log('array',array);
        const validationMessages = array.map((er:any) => (er.message).replace(regex, '') )     
        return apiResponse(res, true, [], validationMessages[0], CLIENT_ERROR.badRequest,0, []);
      } else {
        next()
      }
    } catch (err:any){
      return apiResponse(res, true, [], err.message, SERVER_ERROR.internalServerError, 0, []);
    } 
  }
  
module.exports = validateRequest