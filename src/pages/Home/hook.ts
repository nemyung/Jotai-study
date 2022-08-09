import { useEffect, useRef } from 'react';

export default function useInterval<T extends () => void>(cb: T, delay: number | null) {
  const callbackRef = useRef<T>(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    let timer: number;
    if (delay) {
      timer = setInterval(callbackRef.current, delay);
      return () => {
        clearInterval(timer);
      };
    }
  }, [delay]);
}
