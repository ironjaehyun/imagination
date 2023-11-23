import PostModel from '../../shared/db/postModel';

const likes = async (req) => {
  const { _id, isLiked } = req.body;
  console.log(_id);
  await PostModel.updateOne({ _id }, { $inc: { likes: isLiked ? 1 : -1 } });
};

export { likes };
