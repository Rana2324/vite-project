



const App = () => {

  let status = true;

  return (
    <div>
      
     <h1>Login status </h1>
    
      {(()=>{

        if(status== true){
          return <button>Logged in</button>
        }else{
          return <button>Logged out</button>
        }

      })()}


    </div>
  );
};

export default App;