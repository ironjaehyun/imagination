import { atom } from 'jotai';

const initialUserData = {
  _id: '',
  follower: [],
  follow: [],
  id: '',
  name: '',
  posts: [],
};

export const userDataAtom = atom(initialUserData);
