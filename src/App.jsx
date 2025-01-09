import React, { useRef } from 'react';

const App = () => {

  let myheadLine = useRef();

  const change = () => {

    myheadLine.current.classList.remove('text-success');
    myheadLine.current.classList.add('text-danger');

  };


  return (
    <div>


      <h1 className='text-success' ref={myheadLine}>This is a head line</h1>

      <button onClick={change}>Change</button>

    </div>
  );
};

export default App;