import { useAddCount } from './atom';

function Update() {
  const mutation = useAddCount();
  return <button onClick={() => mutation.mutate()}>+</button>;
}

export default Update;
