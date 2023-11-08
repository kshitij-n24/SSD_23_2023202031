import bcrypt from 'bcrypt';
import UserModel from '../models/UserSchema.js';

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const userDetails = await UserModel.findOne({ username });

  if (!userDetails) {
      res.status(404).json({ message: 'User not found' });
  } else {
      const resComp = await bcrypt.compare(password, userDetails.password);

      if (resComp) {
          req.session.user = { username };
          res.status(200).json({ message: 'Successfully logged in.' });
      } else {
          res.status(400).json({ message: 'Incorrect password' });
      }
  }
};

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const userDetails = await UserModel.findOne({ username });

  if (userDetails) {
      res.status(401).json({ message: 'User already exists' });
  } else {
      const passHash = await bcrypt.hash(password, 12);

      try {
        await UserModel.create({
          username,
          password: passHash
        });
        res.status(200).json({ message: 'User created successfully' });
      } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Could not create user due to some issue.' });
      }
  }
};

const logoutUser = async (req, res) => {
  req.session.user = null;
  console.log(req.session);
  const sesID = req.sessionID;
  req.session.destroy(sesID);
  res.status(200).json({ message: 'User logged out successfully.' });
};

export {loginUser, registerUser, logoutUser};