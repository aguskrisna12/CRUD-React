import { useState } from "react"



function Index(){

    const [number, setNumber] = useState(0)

    const decrement = () => {
        setNumber(number - 1)
    }

    const increment = () => {
        setNumber(number + 1)
    }

    const reset = () => {
        setNumber(0)
    }

    const MyButton = ({text, onClick, counter}) => {
        
        return (
          <button onClick={onClick} style={{ opacity : counter >= 10 ? 0.5 : 1 }}>
            {text}
          </button>
        );
    }

    const MyButtonR = ({text, onClick, counter}) => {
        
        return (
          <button onClick={onClick} style={{ opacity : counter < 10 ? 0.5 : 1 }}>
            {text}
          </button>
        )
    }

    const MyCounter = ({counter}) => {
        return (
            <span style={{ margin: 20 }}>{counter >= 10 || counter < 0 ? 'done' : counter}</span>
        )
    }


    return(
        <div className="">
            <MyButton text={'-'} onClick={decrement} counter={number} />
            <MyCounter counter={number} />
            <MyButton text={'+'} onClick={increment} counter={number} />   
            <MyButtonR text={'Reset!'} onClick={reset} counter={number} />
        </div>
    )
}

export default Index