import React from 'react'
import './styles.scss'

const FilterCheckbox = ({ name = 'toggle', isSmall, setIsSmall }) => {
  return (
    <div className="toggle">
      <label className='toggle__switch' htmlFor={name}>
        <input
          className="toggle__checkbox"
          type="checkbox" id={name}
          checked={isSmall}
          onChange={() => setIsSmall(!isSmall)} />
        <span className="toggle__slider"></span>
      </label>
    </div>
  )
}

export default FilterCheckbox
