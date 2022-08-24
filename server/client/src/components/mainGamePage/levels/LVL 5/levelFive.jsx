import style from "./levelFive.module.css"
function LevelFive(props){
  const handleNext=() => props.setComponentLVL(1)
  return(
     <div>
       <div className={style.background}></div>
       <button onClick={handleNext}>next</button>
     </div>
   )
}
    export default LevelFive