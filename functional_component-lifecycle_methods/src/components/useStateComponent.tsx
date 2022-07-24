import { useState } from "react";

function UseStateComponent(){
    const [arr, arrSet] = useState<number[]>([])

    return(
        <div>
            <h3>UseState</h3>
            <div>
                <button onClick={()=>{
                    arrSet([...arr, arr.length + 1])
                }}>Add</button>
            </div>
            {JSON.stringify(arr)}
        </div>
    )
}

export default UseStateComponent