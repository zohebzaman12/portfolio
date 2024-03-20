import React, { Suspense, lazy } from 'react'
import ClickIncrease from './Components/ClickIncrease'
import HoverIncrease from './Components/HoverIncrease'

const LazyComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/HoverIncrease')), 5000);
  });
});

const App = () => {
  return (
    <div className="App">
    {/*Render both of these components to the UI */}
    <ClickIncrease />
    <HoverIncrease />
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
  )
}

export default App