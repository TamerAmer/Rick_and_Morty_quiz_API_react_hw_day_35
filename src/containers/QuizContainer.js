import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";

const QuizContainer = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = () => {
        fetch("https://rickandmortyapi.com/api/character?page=1")
        .then(res => res.json())
        .then(char => setCharacters(char.results))
    }

    return (
        <>
            <h1>THE BIG FAT RICK AND MORTY QUIZ OF THE YEAR</h1>
            <CharacterList characters={characters}/>
        </>
    )
}
export default QuizContainer