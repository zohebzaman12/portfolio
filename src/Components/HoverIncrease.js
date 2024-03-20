import React,{useState} from 'react'
import withCounter from './withCounter'

const HoverIncrease = (props) => {
    const [fontSize, setFontSize] = useState(10);
    console.log(props);
    return (
      <div>
        {/*This time, instead of listening to clicks,*/}
        {/*Listen to hover events instead*/}
        <button onMouseOver={() => setFontSize((size) => size + 1)}>
          Increase on hover
        </button>
        <p style={{ fontSize }}>
          Size of font in onMouseOver function: {fontSize}
        </p>
        <p> Value of 'name' in HoverIncrease: {props.name}</p>
                <div>
            {/*Use the incrementCounter method to increment the 'counter' state..*/}
            <button onClick={() => props.incrementCounter()}>Increment counter</button> 
            {/*Render the value of our 'counter' variable:*/}
            <p> Value of 'counter' in HoverIncrease: {props.counter}</p>
        </div>
      </div>
    );
}

export default withCounter(HoverIncrease);