import mongoose, { Schema, model } from "mongoose";

const cameraNetworkSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    
    },
    is_active: {
      type: Boolean,
      default: true
    },
    camera_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "camera",
    },
    is_deleted:{
        type:Boolean,
        default:false
    }
  },

  { timestamps: true }
);
const CameraNetwork = model("cameranetwork", cameraNetworkSchema);
module.exports = { CameraNetwork, cameraNetworkSchema }