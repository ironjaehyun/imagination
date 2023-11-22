import SavedImageModel from '../../shared/db/savedImage';

const useSavedImage = async (req, res) => {
  try {
    const userId = req.query.userId; // 요청 쿼리에서 사용자 ID를 가져옴
    const imgs = await SavedImageModel.find({ owner: userId }); // 사용자 ID와 일치하는 문서만 찾음
    console.log(imgs);
    return res.json(imgs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

export { useSavedImage };
