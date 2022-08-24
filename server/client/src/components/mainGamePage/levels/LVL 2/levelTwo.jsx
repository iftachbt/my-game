import style from "./levelTwo.module.css"
function LevelTwo (props){
  const handleNext=() => props.setComponentLVL(3)
  return(
     <div>
       <div className={style.background}></div>
       <button onClick={handleNext}>next</button>
     </div>
   )
    }
    export default LevelTwo