import React, { useEffect,useState }from "react";
import style from "./menuPage.module.css"
import { useNavigate } from "react-router-dom";
import { fetchCharacter,deleteCharacter } from "../../actions/character/character";
import { infoToster } from "../../actions/toastAlert";
import  btnSound  from "../index/images/home-page-sound/impact-6291.mp3";
import { soundEffect } from "../../sounds/VFXsounds";
import CreateSession from "../createSession/createSession";
import SessionInfo from "./sessionInfo";
import { Grid,IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

 function MenuPage(props){
  const [characterList,setCharacterList] = useState([])
  const [noSession,setNoSession] = useState(false)
  const [deleted,setDeleted] = useState(false)
  const [once,setOnce] = useState(false)

    props.setLocation("menuPage")
    const navigate = useNavigate();

    useEffect(() => {
      fetchCharacterHandler()
    },[deleted])

    useEffect(() => {
      if(!once){
        props.setCharacter(false)
        props.setCharacterSession(false)
        setNoSession(false)
        setOnce(true)
      }
    },[once])
    useEffect(() => {
      if(!props.character) setNoSession(false)
    },[noSession])

    async function fetchCharacterHandler(){
      const charList = await fetchCharacter()
      if(charList.length === 0) return navigate('/createCharacter')
      setCharacterList(charList)
    }
    function chooseCharacter(character){
      props.setCharacter(character)
      props.setCharacterSession(character.session)
    }
    const  startGame = () =>{
      (props.characterSession && props.character) && navigate("/mainGame")
      soundEffect(btnSound)
    }
    function newCharacterHandler(){
      if(characterList.length >= 10) infoToster("10 is the max characters")
      else {
        navigate('/createCharacter')
        soundEffect(btnSound)
      }
    }
    async function handleDelete(characterId){
      const res = await deleteCharacter(characterId)
      if(res.acknowledged) setDeleted(!deleted)
    }

    const displayCharacterList =() =>(
       characterList.map((character) => {
        const {name, race, session, id,death,kills} = character
        return(
        <div > 
          <div
          onClick={() => chooseCharacter(character)}
          className={[style.characterGrid, props.character.id === id ?  style.charItemSelected: null].join(" ")}
          >
            <div className={style.values}>
            <div className={style.itemValue}>
              {name}
            </div>
            <div className={style.itemValue}>
              {race}
            </div>
            <div className={style.itemValue}>
              level: {session ?session.level :1}
            </div>
            </div>
                <IconButton
                  onClick={() => handleDelete(id)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
            <div className={style.tooltip}>
              {session 
                ?<SessionInfo
                res={session}
                character={character}
                />
                :<div>
                  this character have no session yet
                  <div className={style.infoBottom}>
                    <div>kills: {kills}</div>
                    <div>death: {death}</div>
                  </div>
                </div>
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
                    <div className={style.btn_div} onClick={() => !props.characterSession 
                      ?setNoSession(true)
                      :startGame()}>
                      <p className={style.p}>PLAY!</p>
                      <div className={style.btn}></div>
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
export default MenuPage

