import { useAtom } from 'jotai';
import { departureAtom, flightFilter, FlightFilter, ONE_WAY_FLIGHT, RETURN_FLIGHT, returnAtom } from './atom';
import { isValidDate, isValidFormat } from '../utils';

function Home() {
  const [filter, setFilter] = useAtom(flightFilter);
  const [departure, setDeparture] = useAtom(departureAtom);
  const [returnState, setReturn] = useAtom(returnAtom);

  const isDepartureValid = isValidFormat(departure) && isValidDate(departure);
  const isReturnValid = isValidFormat(departure) && isValidDate(returnState);

  let isSubmitEnabled = true;

  if (filter === ONE_WAY_FLIGHT) {
    isSubmitEnabled = isDepartureValid;
  } else if (filter === RETURN_FLIGHT) {
    isSubmitEnabled =
      isDepartureValid && isReturnValid && new Date(departure).valueOf() < new Date(returnState).valueOf();
  }

  return (
    <main>
      <select
        value={filter}
        onChange={(e) => {
          const val = Number(e.currentTarget.value) as FlightFilter;
          setFilter(val);
        }}
      >
        <option value={ONE_WAY_FLIGHT}>one way flight</option>
        <option value={RETURN_FLIGHT}>return flight</option>
      </select>
      <input type="text" value={departure} onChange={(e) => setDeparture(e.currentTarget.value)} />
      <input
        disabled={filter === ONE_WAY_FLIGHT}
        type="text"
        value={returnState}
        onChange={(e) => setReturn(e.currentTarget.value)}
      />
      <button disabled={!isSubmitEnabled}>submit</button>
    </main>
  );
}

export default Home;
