import { useAtomValue } from 'jotai';
import { asyncCountAtom } from '../atoms';

function ReadAsync() {
  const count = useAtomValue(asyncCountAtom);
  return (
    <>
      <p>async count</p>
      <span>async current count is:{count}</span>
    </>
  );
}
export default ReadAsync;
