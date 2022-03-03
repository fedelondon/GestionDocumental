import User from '../models/User';

export const signUp = async (req, res) => {
  const { name, lastname, email, username, password, role } = req.body;
  const newUser = new User({
    name,
    lastname,
    email,
    username,
    password: await User.encryptPassword(password),
  });
  await newUser.save();
  res.json(newUser);
};

export const signIn = async (req, res) => {};
