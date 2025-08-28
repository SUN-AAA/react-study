import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
        console.log(count)
    }

    const minus = () => {
        setCount(count - 1);
        console.log(count)
    }

    return(
        <>
            <h1>카운터</h1>
            <h3>현재 카운트 : {count}</h3>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
            <hr/>
        </>
    )
}

export default Counter;