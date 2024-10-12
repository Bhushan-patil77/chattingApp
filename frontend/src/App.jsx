import React, { useState } from 'react'

function App() {
  const [text, setText]=useState('')

  const handleSend =()=>{
    fetch('https://chatting-app-backend-eight.vercel.app/register')
    .then((response)=>{return response.json()})
    .then((data)=>{console.log(data.message)})
  }
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
      <button onClick={()=>{handleSend()}}>send</button>
    </div>
  )
}

export default App