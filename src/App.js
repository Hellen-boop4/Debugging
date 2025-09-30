import React, { useState } from 'react';
import Counter from './counter';

function App() {
  const [count, setCount] = useState(0);

  // debugging=button not working so not incrementing anything
  //no onIncrement prop passed so i added another
  return (
    <div>
      <h1>React Debug Demo</h1>
      <Counter count={count} onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
