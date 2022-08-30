import React, { useEffect,useState }from "react";
import style from "./startPage.module.css"
import { useNavigate } from "react-router-dom";
import { fetchCharacter } from "../../actions/character/character";
import { fetchSessionById } from "../../actions/gameSession/gameSession";
import { infoToster } from "../../actions/toastAlert";
import CreateSession from "../createSession/createSession";
import SessionInfo from "./sessionInfo";
import { Grid } from '@mui/material';

 function StartPage(props){
  const [characterList,setCharacterList] = useState([])
  const [userSessions,setUserSessions] = useState([])
  const [noSession,setNoSession] = useState(false)
    props.setLocation("startPage")
    const navigate = useNavigate();

    useEffect(() => {
      fetchCharacterHandler()
    },[])

    useEffect(() => console.log(noSession),["noSession",noSession])

    async function fetchCharacterHandler(){
      const charList = await fetchCharacter()
      console.log("charList", charList);
      if(charList.length === 0) return navigate('/createCharacter')
      setCharacterList(charList)
    }
   
    function chooseCharacter(character,session){
      props.setCharacter(character)
      props.setCharacterSession(character.session)
    }
    const  startGame = () =>{
      (props.characterSession && props.character) && navigate("/mainGame")
    }
    function newCharacterHandler(){
      if(characterList.length >= 10) infoToster("10 is the max characters")
      else navigate('/createCharacter')
    }

    const displayCharacterList =() =>(
       characterList.map((character) => {
        const {name, race, session, id} = character
        return(
        <div > 
          <div
          onClick={() => chooseCharacter(character)}
          className={[style.characterGrid, props.character.id === id ?  style.charItemSelected: null].join(" ")}
          >
            <div className={style.itemValue}>
              {name}
            </div>
            <div className={style.itemValue}>
              {race}
            </div>
            <div className={style.itemValue}>
              level: {session ?session.level :1}
            </div>
            <div className={style.tooltip}>
              {session 
                ?<SessionInfo
                res={session}
                />
                :"this character haven't played yet"
              }
            </div>
          </div>
        </div>
     )})
    )
      
    return(
      <div className={style.body}>
        <div>
        {(noSession && props.character) && <CreateSession 
        setNoSession={setNoSession}
        character={props.character}
        characterSession={props.characterSession}
        setCharacterSession={props.setCharacterSession}
        />}
        </div>
          <div className={style.mainContiner}>
            <h1 className={style.h1} >choose character</h1>
            <div>
                <div className={style.characterList}>
                  {displayCharacterList()}
                </div>
              <div className={style.buttonContainer}>
                <Grid container spacing={2}>
                  <Grid item xs={0} md={3}>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div className={style.btn_div} onClick={newCharacterHandler}>
                      <p className={style.p}>new character</p>
                      <div className={style.btn} ></div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <div className={style.btn_div}>
                      <p className={style.p}>PLAY!</p>
                      <div className={style.btn} onClick={() => !props.characterSession 
                      ?setNoSession(true)
                      :startGame()}
                      ></div>
                    </div>
                  </Grid>
                  <Grid item xs={0} md={3}>
                  </Grid>
                </Grid>
              </div>
            </div>
        </div>
      </div>
    )
}
export default StartPage

