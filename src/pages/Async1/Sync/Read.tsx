import { useAtomValue } from 'jotai';
import { syncCountAtom } from '../atoms';

function Read() {
  const count = useAtomValue(syncCountAtom);
  return (
    <>
      <h2>Sync</h2>
      <div>current count is {count}</div>
    </>
  );
}
export default Read;
