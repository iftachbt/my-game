import React, {useState,useEffect} from "react";
import style from "./shop.module.css";
import { items } from "./items";
import  Button  from "../../buttons/buttons";


function Shop(props){
  const [state , setState]=useState("health_potion")

  const handleStyle = (cost) => {
    if(cost > props.hero.gold) return style["gray"]
    return style["actionBox"]
  }
  const drinkPotion = (item) =>{}

  return(
    <div className={style.body}>
      <div className={style.actionContainer}>
      <div className={style[state]}>
        {items.map((item) => {
          console.log(item.name);
          return (
            <div className={style[item.name]}>
              <div 
              onClick={() => drinkPotion(item)}
              className={[handleStyle(item.cost),style[item.color]].join(" ")}
              ><h1>{item.action}</h1>
              </div>
              <h1>{item.cost}$</h1>
            </div>
          )
        })}
        
      </div>
      </div>
        <Button 
        text="next"
        handleClick={() => props.next()}
        color="red"
        />
    </div>
    )
}

export default Shop
