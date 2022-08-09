import { atom } from 'jotai';
import { sleep } from '../utils';

export const syncCountAtom = atom(0);
export const syncCountUpdate = atom(null, (get, set, updateValue: number) => set(syncCountAtom, updateValue));

export const baseAtom = atom<number | null>(null);

export const asyncCountAtom = atom(
  async (get) => {
    const existing = get(baseAtom);
    if (!existing) {
      await sleep(450);
      return Math.random();
    }
    return existing;
  },
  async (get, set, updatedValue: number) => {
    await sleep(1000);
    set(baseAtom, updatedValue);
  },
);
