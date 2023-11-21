export type PostType = {
  _id: string;
  post_title: string;
  post_content: string;
  post_prompt: string;
  post_negative_prompt: string;
  post_hashtag: [string];
  post_img1: string;
  owner: string;
  posted_at: Date;
  __v: number;
};
