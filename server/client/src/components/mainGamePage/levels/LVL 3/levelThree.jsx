import style from "./levelThree.module.css"
function LevelThree(props){
  const handleNext=() => props.setComponentLVL(4)
  return(
     <div>
       <div className={style.background}></div>
       <button onClick={handleNext}>next</button>
     </div>
   )
    }
    export default LevelThree