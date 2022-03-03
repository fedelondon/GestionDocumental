import { Schema, model } from 'mongoose';

const roleSchema = new Schema(
  {
    role: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Role', roleSchema);
