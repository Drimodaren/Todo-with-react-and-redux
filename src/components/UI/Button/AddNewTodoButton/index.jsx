import React from 'react';

export default function AddNewTodoButton({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
