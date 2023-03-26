import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTodoByID } from '../../store/todos/selectors'

export default function TodoItemDetails() {
  const {id}=useParams()
  
  const todo = useSelector(state=>getTodoByID(state,id))
  return (
    <div>{todo?.title}-{todo?.id}</div>
  )
}
