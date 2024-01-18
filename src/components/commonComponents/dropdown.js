import React, { useState } from 'react'
import './_dropdown.scss'

function Dropdown({ list = [] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="list-container">Categories</span>
      {isHovered && (
        <div
          style={{
            border: '1px solid #ccc',
            position: 'absolute',
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            marginTop: '5px',
            zIndex: 1,
          }}
        >
          {list.length > 0 ? (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {list.map((item, index) => (
                <li
                  key={index}
                  style={{ padding: '8px', borderBottom: '1px solid #ccc' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ padding: '8px' }}>No items available</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Dropdown
