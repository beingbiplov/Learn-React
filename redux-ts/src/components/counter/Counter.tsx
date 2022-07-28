import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./CounterSlice";

export function Counter(){
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <span>{count}</span>
            <div>
                <button
                    aria-label='Increment'
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                
                <button
                    aria-label='Decrement'
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    Increase by 5
                </button>
            </div>
        </div>
    )
}