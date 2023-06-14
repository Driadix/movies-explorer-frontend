import React from 'react'
import './styles.scss'

const FilterCheckbox = ({name='toggle'}) => {
  const [isToggled, setIsToggled] = React.useState(false)

  return (
    <div className="toggle">
      <label className='toggle__switch' htmlFor={name}>
        <input className="toggle__checkbox" type="checkbox" id={name}/>
        <span className="toggle__slider"></span>
      </label>
    </div>
  )
}

export default FilterCheckbox
