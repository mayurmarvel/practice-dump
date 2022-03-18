import React, { useState } from 'react'; // Importing Use State Hook

function App() {

  let [count, setCount] = useState(0) // initialise the count = o;


  const increment = () => {

    setCount(count + 1) // Correct

  }

  const decrement = () => {

    setCount(count - 1) // Correct

  }
  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <p> The Count is : {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;