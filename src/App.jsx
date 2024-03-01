import { useCallback, useEffect, useState, useRef  } from 'react'


function App() {
  const [Password, setPassword] = useState("")
  const [Charactor, setCharactor] = useState(false)
  const [Number, setNumber] = useState(false)
  const [Range, SetRange] = useState(6)
  const PasswordRef = useRef(null)
// password generating
  let generatepassword = useCallback(() =>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(Number){
          str += "123456789"
        }
        if(Charactor){
          str += "@#$&?<>*%"
        }
         for(let i=0 ; i <= Range ; i++){
          let index = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(index)
         }
         setPassword(pass) // calling this function to set password
  },[Charactor,Number,Range,setPassword])
  // password generation end
  useEffect(generatepassword,[Charactor,Number,Range])

  // copy buttion function
const copyPsw = useCallback(() =>{
  PasswordRef.current?.select()
  window.navigator.clipboard.writeText(Password)
  alert("Password Copied")
},[Password])
  // copy buttion function

  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <div><input type="text" value={Password} ref={PasswordRef}/>
            <button onClick={copyPsw}>COPY</button>
            </div>
          <div>
           <label>Length: <input type="range" min="6" max="100"
           onChange={(e) =>SetRange(e.target.value)}/>{Range}</label> 
           <label>Charactor <input type="checkbox" 
           onChange={() =>{setCharactor(prevsetCharactor => !prevsetCharactor)}}/></label> 
            <label>Number <input type="checkbox" 
            onChange={() =>{setNumber(prevsetNumber => !prevsetNumber)}}/></label> 
          </div>
      </div>




    </>
  )
}

export default App
