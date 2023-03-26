import React from 'react'
import { USERS } from '../../../../store/todos/constans'

export default function SelectUser({...props}) {
  return (
    <select {...props} >
    {' '}
    {/* value принимает из option */}
    <option value={''} disabled={true} />
    {Object.entries(USERS).map(([userId, name]) => (
      <option key={userId} value={userId}>{name}</option>
    ))}
  </select>
  )
}
