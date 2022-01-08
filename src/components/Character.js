import React from "react"

const Character=({characterProps}) => {

    
    return(
        <>
            <img src={characterProps.image} alt="Character"/>
        </>
    )
}

export default Character;