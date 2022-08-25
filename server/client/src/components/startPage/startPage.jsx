import React, { useEffect,useState }from "react";
import style from "./startPage.module.css"
import { useNavigate } from "react-router-dom";
import { fetchCharacter } from "../../actions/character/character";

function StartPage(props){
  const [characterList,setCharacterList] = useState([])
    props.setLocation("startPage")
    const navigate = useNavigate();

    useEffect(() => {
      const findCharacterList =() => fetchCharacter().then(res => setCharacterList(res))
      findCharacterList()
    },[])
    function chooseCharacter(character){
      props.setCharacter(character)
    }
    const  startGame = () =>props.character ?navigate("/mainGame") :null
  

    const displayCharacterList =() =>(
      characterList.map(character => (
        <div 
        className={style.characterGrid}
        onClick={() => chooseCharacter(character)}
        >
          <div>
            {character.name}
          </div>
          <div>
            {character.race}
          </div>
        </div>
     ))
    )
      
    return(
        <div className={style.body}>
            <h1>choose character</h1>
            <div>
                <div>
                    <button onClick={() => navigate('/createCharacter')} name="newGame">new character</button>
                </div>
                <div>
                  {displayCharacterList()}
                </div>
                <div>
                    <button onClick={startGame}>PLAY!</button>
                </div>
            </div>
        </div>
    )
}
export default StartPage

// console.log("character",character);
//         console.log("character.name",character.name);
//         console.log("character.race",character.race);
//         return(
//         <div className={style.characterGrid}>
//           {character.name}{character.race}
//         </div>
//         )
//       }