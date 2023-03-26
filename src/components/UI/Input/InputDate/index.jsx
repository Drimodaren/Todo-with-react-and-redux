import React from 'react'

export default function InputDate({...props}) {
  
  return (
    <input
    type="date"
    {...props}
    min={new Date().toISOString().slice(0, 10)}
    //min={`${year}-0${month}-${day}`}
  />
  )
}
