import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Levels from "./levels/levels";
import Header from "./header/header";

function MainGamePage(props){

  const [avatar, setAvatar] = useState({
    static: {},
    dynamic: {}
  })
  const [componentLVL,setComponentLVL]=useState(1)
  const navigate = useNavigate();
  
  props.setLocation("mainGame")
  if(!props.avatar.dynamic) navigate('/startPage')
  
  
  return(
    <div>
      <Header 
      componentLVL={componentLVL}
      />
      <Levels 
      componentLVL={componentLVL}
      setComponentLVL={setComponentLVL}
      />
    </div>
    )
}

export default MainGamePage
