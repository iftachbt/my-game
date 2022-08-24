import React from "react";
import LevelOne from "./LVL 1/levelOne";
import LevelTwo from "./LVL 2/levelTwo";
import LevelThree from "./LVL 3/levelThree";
import LevelFour from "./LVL 4/levelFour";
import LevelFive from "./LVL 5/levelFive";

function Levels(props){
  
  
  switch(props.componentLVL){
     case 1: return(
      <div>
        <LevelOne 
      setComponentLVL={props.setComponentLVL}
        />
      </div>
      )
    case 2: return(
      <div>
        <LevelTwo 
      setComponentLVL={props.setComponentLVL}
      />
      </div>
      )
    case 3: return(
      <div>
        <LevelThree 
      setComponentLVL={props.setComponentLVL}
      />
      </div>
      )
    case 4: return(
      <div>
        <LevelFour 
      setComponentLVL={props.setComponentLVL}
        />
      </div>
      )
    case 5: return(
      <div>
        <LevelFive 
      setComponentLVL={props.setComponentLVL}
      />
      </div>
      )
  }
  
}

export default Levels
