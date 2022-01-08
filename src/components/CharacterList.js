import React from "react";
import Character from "./Character";

const CharacterList=({characters}) => {

    const characterItems = characters.map((characterProps) => {
        return (
        <Character characterProps={characterProps}/>
        )
    })

    return(
        <>
            <ul>
                {characterItems}
            </ul>   
        </>
    )
}

export default CharacterList;