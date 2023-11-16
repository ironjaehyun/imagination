import postModel from '../../shared/postModel';

const postUpload = async (req, res) => {
  const {
    post_title,
    post_img1,
    post_prompt,
    post_negative_prompt,
    post_content,
  } = req.body;
  const post = new postModel({
    post_title: post_title,
    post_img1: post_img1,
    post_prompt: post_prompt,
    post_negative_prompt: post_negative_prompt,
    post_content: post_content,
  });
  await post.save();
  res.json({ msg: 'db 연동' });
};

const postModalData = async (req, res) => {
  try {
    const data = await postModel.find(
      {},
      { _id: 0, post_title: 1, post_content: 1 },
    ); //id는 안가져옴 post_title과 post_content만 선택
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export { postUpload, postModalData };
