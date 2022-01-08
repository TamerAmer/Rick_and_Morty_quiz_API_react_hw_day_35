import React from "react"

const Character=({characterProps}) => {

    
    return(
        <>
                <p>{characterProps.name}</p>
                <img src={characterProps.image} alt="Character"/>

        </>
    )
}

export default Character;