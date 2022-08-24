import style from "./levelFour.module.css"
function LevelFour(props){
  const handleNext=() => props.setComponentLVL(5)
  return(
     <div>
       <div className={style.background}></div>
       <button onClick={handleNext}>next</button>
     </div>
   )
  }
    export default LevelFour