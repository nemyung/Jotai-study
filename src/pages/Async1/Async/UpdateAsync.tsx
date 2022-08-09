import { MouseEvent } from 'react';
import { useSetAtom } from 'jotai';
import { asyncCountAtom } from '../atoms';

function UpdateAsync() {
  const update = useSetAtom(asyncCountAtom);
  const handleAsyncUpdate = async (e: MouseEvent<HTMLButtonElement>) => {
    await update(Math.random());
  };
  return <button onClick={handleAsyncUpdate}>Update</button>;
}
export default UpdateAsync;
