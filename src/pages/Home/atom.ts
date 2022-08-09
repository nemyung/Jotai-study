import { atom } from 'jotai';

// The formula for converting a temperature C in Celsius into a temperature F in Fahrenheit is
// C = (F - 32) * (5/9) and the dual direction is F = C * (9/5) + 32.

const c2f = (x: number) => x * (9 / 5) + 32;
const f2c = (x: number) => (x - 32) * (5 / 9);

const INITIAL_CELSIUS = 5;
const baseCelsiusAtom = atom(INITIAL_CELSIUS.toFixed(0));
const baseFahrenheitAtom = atom(c2f(INITIAL_CELSIUS).toFixed(0));

export const celsiusAtom = atom(
  (get) => get(baseCelsiusAtom),
  (get, set, val: string) => {
    set(baseCelsiusAtom, val);
    const temp = Number(val);
    if (val && Number.isFinite(temp)) {
      set(baseFahrenheitAtom, c2f(temp).toFixed(0));
    }
  },
);

export const fahrenheitAtom = atom(
  (get) => get(baseFahrenheitAtom),
  (get, set, val: string) => {
    set(baseFahrenheitAtom, val);
    const temp = Number(val);
    if (val && Number.isFinite(temp)) {
      set(baseCelsiusAtom, f2c(temp).toFixed(0));
    }
  },
);
