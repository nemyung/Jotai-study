import { useAtom } from 'jotai';
import { derivedCountAtom } from './atom';
import s from './Counter.module.css';

function Home() {
  const [count, increment] = useAtom(derivedCountAtom);
  return (
    <div className={s.counter}>
      <span className={s.counterDisplay}>current count is {count}</span>
      <button className={s.counterButton} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Home;
