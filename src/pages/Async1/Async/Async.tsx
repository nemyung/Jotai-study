import { Suspense } from 'react';
import ReadAsync from './ReadAsync';
import UpdateAsync from './UpdateAsync';
function Async() {
  return (
    <>
      <Suspense fallback={<div>hi</div>}>
        <ReadAsync />
      </Suspense>
      <UpdateAsync />
    </>
  );
}

export default Async;
