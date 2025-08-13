import { useReducer, useState } from "react";


function App() {
  const [number, setNumber] = useState(1);
  
  // 비유: 회계 직원
  // action <- {type: 'DOWN', number: number}
  // action.type -> 'DOWN'
  // action.number -> number
  function countReducer(oldCount, action) {
    if (action.type === 'UP') {
      return oldCount + action.number;
    } else if (action.type === 'DOWN') {
      return oldCount - action.number;
    } else if (action.type === 'RESET') {
      return 0;
    }
  }

  // const [변수, 함수] = useReducer(함수, 초깃값);
  // Dispatch 의미? 전달하다.
  const [count, countDispatch] = useReducer(countReducer,0);
  
  function down() {
    // 비유: 창구 직원
    countDispatch({type: 'DOWN', number: number});
  }
  function reset() {
    countDispatch({type: 'RESET', number: number});
  }
  function up() {
    countDispatch({type: 'UP', number: number});
  }

  function changeNumber(event) {
    console.log('event.target.value', typeof Number(event.target.value));
    setNumber(Number(event.target.value));
  }

  return (
    <div>
      <input type="button" value="-" onClick={down}/>
      <input type="button" value="0" onClick={reset}/>
      <input type="button" value="+" onClick={up}/>
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>
    </div>
  );
}

export default App;
