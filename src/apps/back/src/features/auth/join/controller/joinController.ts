import userModel from '../../../../Models/userModel';

const checkId = async (req, res) => {
  try {
    const user = await userModel.findOne({ id: req.body.id });
    console.log(user);

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

export default checkId;
