import userModel from '../../shared/userModel';
import bcrypt from 'bcrypt';
import { createAccessToken } from '../helper/createToken';
import jwt from 'jsonwebtoken';

const checkId = async (req, res, next) => {
  const user = await userModel.findOne({ id: req.body.id });
  if (user) {
    res.json({ msg: 'User already exists' });
  } else {
    res.json({ msg: 'User does not exist' });
    next();
  }
};

const joinId = async (req, res) => {
  const { name, id, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = new userModel({ id, password: hash, name });
  const token = createAccessToken(user._id, id, name);
  res.status(200).json({ name: user.name, id, token });
  await user.save();
};

const handleLogin = async (req, res) => {
  const { id, password } = req.body;
  const user = await userModel.findOne({ id });
  if (!user) return res.status(400).json('user not found');

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) return res.status(400).json('wrong password');

  const accessToken = createAccessToken(user._id, user.id, user.name);

  res.cookie('accessToken', accessToken, {
    secure: false, // 현재 http를 사용중이라서 false
    httpOnly: true,
  });

  res.status(200).json('login success');
};

const accessToken = async (req, res) => {
  const token = req.cookies.accessToken;
  const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const user = await userModel.findOne({ id: data.id });
  const { ...others } = user;

  res.status(200).json(others);
};

const loginSuccess = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await userModel.findOne({ _id: data._id });

    // 비밀번호를 제외한 사용자 데이터를 가져옴

    res.status(200).json(user);
  } catch (error) {
    // 토큰이 유효하지 않은 경우 또는 다른 오류 발생 시
    res.status(401).json({ error: 'Invalid token' });
  }
};

const logout = (req, res) => {
  res.cookie('accessToken', '');
  res.status(200).json('Logout Success');
};

export { checkId, joinId, handleLogin, loginSuccess, logout, accessToken };
