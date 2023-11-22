type ObjectId = string;

type OwnerType = {
  _id: ObjectId;
  id: string;
  user_profile_img: string;
};

export type PostType = {
  _id: ObjectId;
  post_title: string;
  post_content: string;
  post_prompt: string;
  post_negative_prompt: string;
  post_hashtag: string[];
  post_img1: string;
  post_img2: string;
  post_img3: string;
  post_img4: string;
  owner: OwnerType;
  posted_at: Date;
  __v: number;
};
