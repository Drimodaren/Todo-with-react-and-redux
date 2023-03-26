import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter({label}) {
  const field = label + 'Counter'
  const value = useSelector(state=>state[field])
  const dispatch = useDispatch()
  const handleClick = ()=>{
    dispatch({type:field+'/ink'})
  }
  return (
    <button onClick={handleClick}>{value}</button>
  )
}
