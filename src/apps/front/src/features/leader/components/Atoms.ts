//Atoms.ts
import { atom } from 'jotai';

export enum Period {
  sevenDays = 7,
  allTime = 0,
}

export const periodAtom = atom<number>(Period.sevenDays);
