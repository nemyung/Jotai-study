import { atom } from 'jotai';

const countAtom = atom(0);
export const derivedCountAtom = atom(
  (get) => get(countAtom),
  (get, set) => set(countAtom, (c) => c + 1),
);
