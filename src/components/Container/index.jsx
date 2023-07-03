import React from 'react'
import './styles.scss';

const Container = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Container
