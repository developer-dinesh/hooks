import React, { useState } from 'react';




const App = () => {

  const state = useState();
  const [count, setCount] = useState(0);


  const Increment = () => {
    setCount(count + 1);

  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);

  };
  return (
    <>


      <h1> {count} </h1>
      <button onClick={Increment} type="button" class="btn btn-primary">Increase</button> <br />
      <button onClick={Decrement} type="button" class="btn btn-secondary">Decrease</button> <br />
      <button onClick={Reset} type="button" class="btn btn-success">Reset</button> 
    

    </>
  );
}

export default App;