import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/counterSlice';
import { RootState } from '../../app/store';

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch(); // 通知を出すことができるhooksがreact reduxに用意されている
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter