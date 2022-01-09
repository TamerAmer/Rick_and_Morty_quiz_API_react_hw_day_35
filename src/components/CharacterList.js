import React from "react";
import Character from "./Character";

const CharacterList=({characters}) => {

    // const checkValueEquals=({characters}) => {
    //     if()
    // }



    const characterItems = characters.map((characterProps,index) => {
        

        return (
        <>
        <Character characterProps={characterProps} key={index}/>
        <br></br>
        
        <input type="text" id={characterProps.id} name="charName" placeholder="Enter Character Name" ></input>
        </>
        )
    })

    return(
        <>

                {characterItems}
        </>
    )
}

export default CharacterList;