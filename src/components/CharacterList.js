import React from "react";
import Character from "./Character";

const CharacterList=({characters}) => {

    const characterItems = characters.map((characterProps,index) => {
        return (
        <Character characterProps={characterProps} key={index}/>
        )
    })

    return(
        <>

                {characterItems}
        </>
    )
}

export default CharacterList;