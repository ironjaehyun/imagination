import userModel from '../../shared/db/userModel';

const findPostsFollow = async (req, res) => {
  try {
    const user = await userModel.findOne({ id: req.params.userId });
    if (user) {
      console.log(user);
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export { findPostsFollow };
