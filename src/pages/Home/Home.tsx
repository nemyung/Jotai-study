import { useAtom } from 'jotai';
import { celsiusAtom, fahrenheitAtom } from './atom';

function Home() {
  const [celsius, setCelsius] = useAtom(celsiusAtom);
  const [fahrenheit, setFahrenheit] = useAtom(fahrenheitAtom);

  return (
    <main>
      <label htmlFor="celsius">
        <input
          id="celsius"
          value={celsius}
          onChange={(e) => {
            setCelsius(e.currentTarget.value);
          }}
        />
        <span>{celsius}</span>
      </label>
      <span>=</span>
      <label htmlFor="fahrenheit">
        <input
          id="fahrenheit"
          value={fahrenheit}
          onChange={(e) => {
            setFahrenheit(e.currentTarget.value);
          }}
        />
        <span>{fahrenheit}</span>
      </label>
    </main>
  );
}

export default Home;
