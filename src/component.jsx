import React, { useState } from 'react'


export default function Component() {

   const [text, setText] = useState()
   const [update, setUpdate] = useState()
   
   const textOnchange = (event) => {
    setText(event.target.value)
  }
  const buttonOnclick = (event) => {
    setUpdate(text)
  }
  
  
  return (
    <div>
      
      <input type="text" value={text} onChange={textOnchange}/>
      <button onClick={buttonOnclick}>Actualizar</button>
      <p>Texto Input: {text}</p>
      <p>Texto Actualizado: {update}</p>
      
    </div>
  )

  
}


