import React,{useState} from 'react'
import withCounter from './withCounter'

const ClickIncrease = (props) => {
    const [fontSize, setFontSize] = useState(10); //set initial value of Hook to 10.
    return (
      <div>
        {/*When clicked, increment the value of fontSize*/}
        <button onClick={() => setFontSize((size) => size + 1)}>
          Increase with click
        </button>
        {/*Set the font size of this text to the fontSize variable.*/}
        {/*Furthermore, display its value as well.*/}
        <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
        <p> Value of 'name' in ClickIncrease: {props.name}</p>
                <div>
            {/*Use the incrementCounter method to increment the 'counter' state..*/}
            <button onClick={() => props.incrementCounter()}>Increment counter</button> 
            {/*Render the value of our 'counter' variable:*/}
            <p> Value of 'counter' in ClickIncrease: {props.counter}</p>
        </div>
      </div>
    );
}

export default withCounter(ClickIncrease);