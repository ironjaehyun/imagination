import userModel from '../../shared/db/userModel';

const imageUpload = async (req, res) => {
  console.log('test');
  console.log(req.files);
  const userProfilePath = req.files['profileImage'][0].location;
  const userBackgroundlPath = req.files['bgImage'][0].location;
  const id = req.body.id;
  const status = req.body.status;
  console.log(status);
  const user = await userModel.findOne({ id: id }).exec(); // 인스턴스화 시켜줘야함

  if (user) {
    user.user_background_img = userBackgroundlPath;
    user.user_profile_img = userProfilePath;
    user.user_status_msg = status;
    await user.save();
    await res.json({
      background: userBackgroundlPath,
      profile: userProfilePath,
      status: status,
    });
  } else {
    res.json({ msg: 'User does not exist' });
  }
};

const postList: { title: string }[] = [{ title: '첫번째 포스트' }];

const clickPost = (req, res) => {
  if (req.query._id) {
    res.send(JSON.stringify(postList));
  }
};

export { imageUpload, clickPost };
