import React, { useCallback } from 'react';

function CounterButton({ onIncrement }) {
     /*DO NOT EDIT THIS LINE */ console.log("CounterButton rendered!"); //DO NOT edit this line 
      const handleClick = useCallback(() => {
    // console.log('Button clicked!');
    onIncrement();
  }, [onIncrement]);

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );

}

export default React.memo(CounterButton);
