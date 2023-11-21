import PostModel from '../../shared/db/postModel';

const postsImg = async (req, res) => {
  try {
    const posts = await PostModel.find({});
    console.log(posts);
    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

export { postsImg };
