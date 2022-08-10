import { Suspense } from 'react';
import View from './View';
import Update from './Update';

function Home() {
  return (
    <main>
      <Suspense fallback={<span>loading</span>}>
        <View />
      </Suspense>
      <Update />
    </main>
  );
}

export default Home;
