import { Suspense } from 'react';
import { TreeHousePage } from './features/tree-house/page.tsx';

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TreeHousePage />
    </Suspense>
  );
}
