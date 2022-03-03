import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true, trim: true },
    username: { type: String, unique: true },
    password: { type: String, required: true },
    role: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, recivedPassword) => {
  return await bcrypt.compare(recivedPassword, password);
};

export default model('User', userSchema);
