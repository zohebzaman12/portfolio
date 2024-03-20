import React, { useState } from 'react'

const withCounter = (OlderComponent) => {
 
    const NewComponent = (props) =>{
            const [counter,setCounter] = useState(0);
        return(
            <OlderComponent 
                name = "Zoheb"
                counter={counter}
                incrementCounter = {() => setCounter((prev) =>prev + 1) }
            />
        )
    }

    return NewComponent
}

export default withCounter