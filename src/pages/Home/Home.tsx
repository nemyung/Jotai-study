import { useAtom, useSetAtom, useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { timeAtom, percentageAtom, durationTimeAtom } from './atom';
import useInterval from './hook';

const INTERVAL = 100;

function Home() {
  const updateTime = useSetAtom(timeAtom);
  const percentage = useAtomValue(percentageAtom);
  const reset = useResetAtom(percentageAtom);
  const [duration, setDuration] = useAtom(durationTimeAtom);

  useInterval(() => {
    updateTime(INTERVAL);
  }, INTERVAL);

  return (
    <section style={{ color: 'white', width: '200px', height: '300px', backgroundColor: 'midnightblue' }}>
      <div>
        <p>Elapsed Time: </p>
        <div style={{ position: 'relative', background: 'red', height: '20px' }}>
          <div
            style={{
              position: 'absolute',
              background: 'yellow',
              inset: '0',
              transform: `translateX(${(percentage - 100).toFixed(1)}%)`,
            }}
          />
        </div>
      </div>
      <p>{percentage.toFixed(1)}s</p>
      <input
        type="range"
        min={100}
        value={duration}
        max={200}
        step={10}
        onChange={(e) => setDuration(Number(e.currentTarget.value))}
      />
      <button onClick={reset}>123</button>;
    </section>
  );
}

export default Home;
