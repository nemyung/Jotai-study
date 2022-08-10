import { useAtom } from 'jotai';
import { countAtom } from './atom';

function View() {
  const [count] = useAtom(countAtom);
  return <h1>{count}</h1>;
}

export default View;
