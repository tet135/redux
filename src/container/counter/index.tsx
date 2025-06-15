import "../counter/index.css";

import { useSelector, useDispatch} from "react-redux";
import { increment, decrement, incrementByAmount } from "./slice";
import { RootState } from "../../store";


export default function Counter() {
    //useSelector - хук для відбору та використання конкретної частини з усього стану, наприклад, тут тільки даних з counter
    const count = useSelector((state: RootState) => state.counter.value)
   //useDispatch - хук для виконнання оновлення конкретної частини усього стану шляхом відправлння (dispatch) дій (actions) до Redux-сховища 
   const dispatch = useDispatch();

    return (
        <div className="counter">
            <button className="button" onClick={() => dispatch(incrementByAmount({value: 5}))}>+5</button>
            <button className="button" onClick={() => dispatch(increment())}>+</button>
            <span className="value">{count}</span>
            <button className="button"onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}
