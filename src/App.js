import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function App() {

  const { age } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      Age : {age}
      <div>
        <button onClick={() => dispatch({ type: 'ADD' })}>Age UP</button>
        <button onClick={() => dispatch({ type: 'SUB' })}>Age Down</button>
      </div>
    </div>
  )
}
