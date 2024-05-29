import React from 'react'
import { useEffect, useState } from 'react'
const Backgroundchanger = () => {

  const [color, setColor] = useState("blue")
  const click = color => {
    setColor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div className = "App">
      hello
    </div>
    )
  
}

export default Backgroundchanger;