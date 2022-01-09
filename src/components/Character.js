import React from "react"

const Character=({characterProps}) => {

    // const fullChar=() => {
    //     this.characterProps=characterProps
    //     this.charText=charText
        
    // }

    // const charName=useState("")
    
    return(
        <>
                <p>{characterProps.name}</p>
                <img src={characterProps.image} alt="Character" width="200" height="200"/>
                {/* <label for="charName">Enter Character Name</label> */}
               

        </>
    )
}

export default Character;