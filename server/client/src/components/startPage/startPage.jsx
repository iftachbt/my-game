import React, { useEffect,useState }from "react";
import style from "./startPage.module.css"
import { useNavigate } from "react-router-dom";
import { fetchCharacter } from "../../actions/character/character";
import { fetchSessionById } from "../../actions/gameSession/gameSession";
import CreateSession from "../createSession/createSession";
import SessionInfo from "./sessionInfo";

 function StartPage(props){
  const [characterList,setCharacterList] = useState([])
  const [userSessions,setUserSessions] = useState([])
  const [noSession,setNoSession] = useState(false)
    props.setLocation("startPage")
    const navigate = useNavigate();

    useEffect(() => {
      const findCharacterList =() => fetchCharacter()
      .then(res => {
        if(res.length===0) navigate('/createCharacter')
        else{
          setCharacterList(res)
        }})
        .then(() =>fetchSessionById())
        .then(res =>{
          console.log("fetchSessionById",res);
           if(res ==="err" ||res.length === 0) setUserSessions([])
           else setUserSessions(res)
           console.log("userSessions",userSessions);
          })
      findCharacterList()
    },[])

    useEffect(() => console.log(noSession),["noSession",noSession])
   
    function chooseCharacter(character,session){
      props.setCharacter(character)
      props.setCharacterSession(session)
    }
    function findCharacterSession(characterId){
      const res = userSessions.find(session => session.characterId === characterId)
      if(res) return res
    }
    const  startGame = () =>{
      (props.characterSession && props.character) && navigate("/mainGame")
    }

    const displayCharacterList =() =>(
      characterList.map((character) => {
        let res = findCharacterSession(character.id)
        return(
        <div> 
          <div
          className={style.characterGrid}
          onClick={() => chooseCharacter(character,res)}
          >
          <div>
              {character.name}
            </div>
            <div>
              {character.race}
            </div>
            <div>
            level: {res ?res.level :1}
            </div>
            <div className={style.tooltip}>
              {res 
                ?<SessionInfo
                res={res}
                 />
                 :"this character haven't played yet"
              }
            </div>
          </div>
        </div>
     )})
    )
      
    return(
      <div>
        <div>
        {(noSession && props.character) && <CreateSession 
        setNoSession={setNoSession}
        character={props.character}
        characterSession={props.characterSession}
        setCharacterSession={props.setCharacterSession}
        />}
        </div>
        <div className={style.body}>
            <h1>choose character</h1>
            <div>
                <div>
                    <button onClick={() => navigate('/createCharacter')} >new character</button>
                </div>
                <div>
                  {displayCharacterList()}
                </div>
                <div>
                    <button 
                    onClick={() => !props.characterSession 
                    ?setNoSession(true)
                    :startGame()}
                    >PLAY!</button>
                </div>
            </div>
        </div>
      </div>
    )
}
export default StartPage

