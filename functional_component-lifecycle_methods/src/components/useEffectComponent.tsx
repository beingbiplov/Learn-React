import { useState, useEffect} from 'react';

function UseEffectComponent(){
    const [arr, arrSet] = useState<number[]>([])

    useEffect(()=>{
        const arrInterval = window.setInterval(()=>{
            arrSet([...arr, arr.length+1])
        }, 5000)
        
        return() => window.clearInterval(arrInterval)
    })

    return(
        <div>
            <h3>UseEffect</h3>
            <div>
                {JSON.stringify(arr)}
            </div>
        </div>
    )
}

export default UseEffectComponent;