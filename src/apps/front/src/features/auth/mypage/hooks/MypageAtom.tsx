import { atom } from 'jotai';

const editModal = atom(false);
const followAtom = atom(false);
const followerAtom = atom(false);
const backgroundImage = atom(
  'https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-a-bright-imagination-generated-by-ai_188544-9853.jpg',
);
const profileImage = atom(
  'https://img.freepik.com/premium-photo/cool-wolf-illustration-design_780593-1864.jpg',
);
const nameAtom = atom('leechi');
const statusMsgAtom = atom('나는 최고다!');

export {
  editModal,
  profileImage,
  backgroundImage,
  nameAtom,
  statusMsgAtom,
  followAtom,
  followerAtom,
};
