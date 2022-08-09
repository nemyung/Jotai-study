import { atom } from 'jotai';
import { convert } from '../utils';

export const ONE_WAY_FLIGHT = 0;
export const RETURN_FLIGHT = 1;

export const FLIGHT_FILTER = [ONE_WAY_FLIGHT, RETURN_FLIGHT] as const;

export type FlightFilter = typeof FLIGHT_FILTER[number];

export const flightFilter = atom<FlightFilter>(ONE_WAY_FLIGHT);
export const departureAtom = atom(convert(new Date().toLocaleString('en-GB')));
export const returnAtom = atom(convert(new Date().toLocaleString('en-GB')));
