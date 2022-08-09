import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';
const baseTimeAtom = atom(Date.now());
export const durationTimeAtom = atom(100);
export const percentageAtom = atomWithReset(0);

export const timeAtom = atom(
  (get) => get(baseTimeAtom),
  (get, set, newValue: number) => {
    const duration = get(durationTimeAtom);
    set(baseTimeAtom, Date.now());
    set(percentageAtom, (c) => (c >= get(durationTimeAtom) ? c : c + newValue / (duration * 10)));
  },
);
