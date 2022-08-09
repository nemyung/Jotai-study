import { useState, useMemo } from 'react';
import { atom, useAtom, useAtomValue } from 'jotai';

// atom config
export const textAtom = atom('');

// derived atoms
// 1. READ_ONLY
const upperCaseAtom = atom((get) => get(textAtom).toUpperCase());

function Home() {
  const [text, setText] = useAtom(textAtom);
  const upperCaseText = useAtomValue(upperCaseAtom);
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Primitive Atoms</h1>
      <button onClick={() => setOpen((prev) => !prev)}>{open ? 'close' : 'open'}</button>
      {open && (
        <div>
          <p>{text}</p>
          <p>{upperCaseText}</p>
          <label>
            <span>YOUR TEXT</span>
            <input type="text" value={text} onChange={(e) => setText(e.currentTarget.value)} />
          </label>
        </div>
      )}
    </>
  );
}

export default Home;
