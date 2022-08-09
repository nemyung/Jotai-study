import { atom, useAtom } from 'jotai';

const priceAtom = atom(0);

function Basic2() {
  const [price, setPrice] = useAtom(priceAtom);

  return (
    <div>
      <h1>it should be GC</h1>
      <p>The price Atom value is :{price}</p>
      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.currentTarget.valueAsNumber);
        }}
      />
    </div>
  );
}
export default Basic2;
