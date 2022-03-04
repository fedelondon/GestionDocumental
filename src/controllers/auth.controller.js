import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';

export const signUp = async (req, res) => {
  const { name, lastname, email, username, password, roles } = req.body;
  const newUser = new User({
    name,
    lastname,
    email,
    username,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ role: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ role: 'user' });

    newUser.roles = [role._id];
  }
  console.log(newUser);
  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({
    username: req.body.username,
  }).populate('roles');

  if (!userFound) return res.status(400).json({ message: 'User not found' });

  const matchPassword = User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ token: null, message: 'Invalid password' });
  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.json({ token });
};
