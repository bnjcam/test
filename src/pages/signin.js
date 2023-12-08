import { useState, useEffect } from "react";
import Index from ".";
function SignIn() {
  const [signedIn, setSignedIn] = useState(false)
  const num = []
  const [pers, setPers] = useState('')
  const [rend, setRend] = useState(false)

  const account = [
    {
      number: '1234',
      name: 'benj'
    },
    {
      number: '134',
      name: 'bej'
    }
  ]
  
 useEffect(() => {
  if (signedIn && !rend) {
    const filteredNumbers = account.map((item) => {
      if (item.number === '1234') {
       setPers(item)
       setRend(true)
      }
    });
  } 
  console.log(pers)
 })

  return (
    <div>
      {signedIn ? <Index /> :
        <div className="w-96 mx-auto">
          <div className="flex justify-center">
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(1)}>1</button>
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(2)}>2</button>
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(3)}>3</button>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(4)}>4</button>
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(5)}>5</button>
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(6)}>6</button>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(7)}>7</button>
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(8)}>8</button>
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(9)}>9</button>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-500 px-4 m-1" onClick={() => num.push(0)}>0</button>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-500 px-4 m-1" onClick={() => {
              if (account.filter(obj => obj.number === num)) {
                setSignedIn(true)
              } 
            }}>Submit</button>
          </div>
        </div>}
    </div>
  );
}

export default SignIn;