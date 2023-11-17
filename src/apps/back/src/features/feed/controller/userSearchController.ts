import PostModel from '../../shared/db/postModel';

const Postssearch = async (req) => {
  const inputValue = req.body.inputValue;
  const posts = await PostModel.find({ post_title: inputValue });
  console.log(posts);
};

export { Postssearch };
