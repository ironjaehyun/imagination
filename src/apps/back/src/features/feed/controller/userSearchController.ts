import PostModel from '../../shared/db/postModel';
import UserModel from '../../shared/db/userModel';

// 검색할 때 입력값이랑 비교하는 필드
PostModel.schema.index({
  post_title: 'text',
  post_content: 'text',
  post_prompt: 'text',
  post_negative_prompt: 'text',
  post_hashtag: 'text',
});

const Postssearch = async (req, res) => {
  const inputValue = req.body.inputValue;
  // 먼저 UserModel에서 id를 검색
  const user = await UserModel.findOne({ id: inputValue });
  let posts = [];
  // UserModel에서 id가 일치하는 사용자를 찾았다면,
  if (user) {
    // 해당 사용자의 _id를 사용하여 PostModel에서 검색
    posts = await PostModel.find({ owner: user._id });
  }
  // 그렇지 않다면, inputValue를 사용하여 PostModel에서 검색
  posts = posts.concat(
    await PostModel.find({ $text: { $search: inputValue } }),
  );

  // console.log(posts);
  return res.json(posts);
};

export { Postssearch };
