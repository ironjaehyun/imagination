import PostModel from '../../shared/db/postModel';

const userpostslike = async (req, res) => {
  try {
    const posts = await PostModel.find({}).populate({
      path: 'owner',
      select: 'user_profile_img _id id',
    });
    console.log(posts);
    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

export { userpostslike };
