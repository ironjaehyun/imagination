import postModel from '../../shared/postModel';

const postUpload = async (req, res) => {
  const { post_title } = req.body;
  console.log(post_title);
  const post = new postModel({ post_title: post_title });

  await post.save();
};

export { postUpload };
