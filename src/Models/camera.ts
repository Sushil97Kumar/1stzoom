import mongoose, { Schema, model } from "mongoose";

const cameraSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,

    },
    is_active: {
      type: Boolean,
      default: true
    },
    
    is_deleted:{
      type:Boolean,
      default:false
  }
  },

  { timestamps: true }
);
const Camera = model("camera", cameraSchema);
module.exports = { Camera, cameraSchema }