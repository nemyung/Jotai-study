import { useSetAtom } from 'jotai';
import { syncCountUpdate } from '../atoms';

function Update() {
  const setCount = useSetAtom(syncCountUpdate);
  return <input type="number" onChange={(e) => setCount(e.currentTarget.valueAsNumber)} />;
}
export default Update;
