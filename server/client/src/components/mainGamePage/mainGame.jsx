import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Levels from "./levels/levels";
import Header from "./header/header";
import { useEffect } from "react";

function MainGamePage(props){
  const [componentLVL,setComponentLVL]=useState(props.characterSession.level||"1")
  const navigate = useNavigate();
  props.setLocation("mainGame")

  useEffect(() => {
    !props.characterSession && navigate("/choosePage")
  })

  
  return(
    <div>
      <Header 
      componentLVL={componentLVL}
      characterSession={props.characterSession}
      character={props.character}
      />
      <Levels 
      componentLVL={componentLVL}
      setComponentLVL={setComponentLVL}
      />
    </div>
    )
}

export default MainGamePage
