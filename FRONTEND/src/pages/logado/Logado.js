import React from 'react'
import './css/styles.css'

const Logado = () => {
  return (
    <div className="logado-container">
      <div className="item1">Item 1</div>
      <div className="item2">Item 2</div>
      <div className="item-container">
        <div className="item3">Item 3</div>
        <div className="item4">Item 4</div>
        <div className="item5">
          <input
            className="message"
            type="text"
            placeholder="message"
            required
          />
        </div>
      </div>
    </div>
  )
}

export default Logado
