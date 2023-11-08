import userModel from '../../../Models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  return jwt.sign({ _id }, jwtkey, { expiresIn: '3d' });
};

const checkId = async (req, res) => {
  try {
    const user = await userModel.findOne({ id: req.body.id });

    if (user) {
      res.status(200).send('User already exists');
    } else {
      res.status(200).send('User does not exist');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const joinId = async (req, res) => {
  try {
    const { name, id, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = new userModel({ id: id, password: hash, name: name });
    const token = createToken(user._id);
    res.status(200).json({ _id: user._id, name: user.name, id, token });
    await user.save();
  } catch (error) {
    console.log('함수 내 오류 : ', error);
    res.status(500).json(error);
  }
};

const handleLogin = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await userModel.findOne({ id });
    if (!user) return res.status(400).json('user not found');

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) return res.status(400).json('wrong password');

    const token = createToken(user._id);

    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ _id: user._id, name: user.name, id, token });
  } catch (error) {
    console.log('함수 내 오류 : ', error);
    res.status(500).json(error);
  }
};

export { checkId, joinId, handleLogin };
