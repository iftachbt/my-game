import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Levels from "./levels/levels";
import Header from "./header/header";

function MainGamePage(props){

  const [componentLVL,setComponentLVL]=useState(1)
  const navigate = useNavigate();
  
  props.setLocation("mainGame")
  
  
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
