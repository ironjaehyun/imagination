import PostModel from '../../shared/db/postModel';
import UserModel from '../../shared/db/userModel';

PostModel.schema.index({
  post_title: 'text',
  post_content: 'text',
  post_prompt: 'text',
  post_negative_prompt: 'text',
  post_hashtag: 'text',
});

const Postssearch = async (req, res) => {
  const inputValue = req.body.inputValue;

  const user = await UserModel.findOne({ id: inputValue });
  let posts = [];
  if (user) {
    posts = await PostModel.find({ owner: user._id }).populate({
      path: 'owner',
      select: 'user_profile_img _id id',
    });
  }
  posts = posts.concat(
    await PostModel.find({ $text: { $search: inputValue } }).populate({
      path: 'owner',
      select: 'user_profile_img _id id',
    }),
  );

  console.log(posts);
  return res.json(posts);
};

export { Postssearch };
