import React from 'react'

const CounterApp = () => {
      const [count , SetCount] = React.useState(0)

    const increment = () => {
        if(count < 10){
            SetCount (count + 1)
        }  
    }

    const dec = () =>{
        if(count>0){
        SetCount (count -1)
        }
    }
    
         
    const res = () =>{
        SetCount(0)
    }
  return (
    <>
     <h1>Counrt APP</h1>
    <h2>Count : {count}</h2>
    <button onClick={increment}>Inc</button>
     <button onClick={dec}>Dec</button>
      <button onClick={res}>Res</button>
    </>
  )
}
export default CounterApp

