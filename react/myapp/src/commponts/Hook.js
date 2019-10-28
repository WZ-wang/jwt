import React, { useState } from 'react';
function  Hook() {
    let [num,changeNum] = useState(0)
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={()=>changeNum(num+1)}>+</button>
        </div>
    )    
}
export default Hook