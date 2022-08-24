import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Levels from "./levels/levels";

function MainGamePage(props){
  
  const [componentLVL,setComponentLVL]=useState(1)
  const navigate = useNavigate();
  
  props.setLocation("mainGame")
  if(!props.avatar) navigate('/startPage')
  
  
  return(
    <div>
      <Levels 
      componentLVL={componentLVL}
      setComponentLVL={setComponentLVL}
      />
    </div>
    )
}

export default MainGamePage
