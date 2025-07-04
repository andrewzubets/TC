//import { useAppDispatch, useAppSelector } from "../store/hooks.mjs"

import {
    // decrement,
    increment,
    // incrementAsync,
    // incrementByAmount,
    // incrementIfOdd,
    selectCount,
    // selectStatus,
} from "../store/slices/counterSlice.mjs"

import { useDispatch, useSelector } from 'react-redux'

function Counter(){
    const dispatch = useDispatch()
    const count = useSelector(selectCount)
    console.log('counter jsx',count);
    const onClick = () => {
          // const a = increment();
          dispatch(increment());
    }
    return (<button onClick={onClick}>
        count is {count}
    </button>);
}

export default Counter;