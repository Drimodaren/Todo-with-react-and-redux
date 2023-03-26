import React from 'react';
import { useDispatch,  } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {inkAll } from '../../../store/counter/actions';
import Counter from '../Counter';



export function Header() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(inkAll());
  };
  return (
    <header>
      <NavLink to={'/'}>Todos</NavLink>
      <NavLink to={'counter'}>Counter</NavLink>
      <Counter label={'header'} />
      <button onClick={handleClick}>Нажми на меня</button>
    </header>
  );
}
