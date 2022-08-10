import { atom } from 'jotai';
import { atomWithQuery } from 'jotai/query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sleep } from '../utils';

const idAtom = atom<number>(0);

let _count = 0;

export const countAtom = atomWithQuery((get) => ({
  queryKey: ['count', 0] as const,
  queryFn: async () => {
    console.log('hi');
    await sleep(2000);
    return _count;
  },
}));

async function addCount() {
  await sleep(1000);
  console.log('sleep done');
  return ++_count;
}

export function useAddCount() {
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      a;
    },
    {
      onSuccess: () => {
        console.log('onSuccess');
        void queryClient.invalidateQueries(['count']);
      },
    },
  );
}
