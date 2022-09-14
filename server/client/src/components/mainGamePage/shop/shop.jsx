import React from "react";
import style from "./shop.module.css";
import { items } from "./items";
import  Button  from "../../buttons/buttons";
import {Tooltip} from '@mui/material';
 


function Shop(props){
  const {hero,setHero,next}=props

  const handleStyle = (cost) => {
    const potionStyle = [style.potion]
    if(cost > hero.gold) potionStyle.push(style.gray)
    else potionStyle.push(style.actionBox)
    return potionStyle.join(" ")
  }
  const drinkPotion = (item) =>{
    setHero(preVal => {
      return{
        ...preVal, 
        [item.type]: hero[item.type]+item.action,
        ["gold"]: hero["gold"]-item.cost
      }
    })
  }
  return(
    <div className={style.body}>
      <div className={style.actionContainer}>
        <div className={style.potionCon}>
          {items.map((item) => {
            console.log(item.name);
            return (
              <div className={[style.potionItem,style[item.name]].join(" ")}>
                <Tooltip title={` +${item.action}  ${item.name} | ${item.cost}G`}>
                  <div 
                    onClick={(item.cost < hero.gold) ?() => drinkPotion(item) :null}
                    className={[handleStyle(item.cost),style[item.type]].join(" ")}>
                    <h1 className={style.h1}>+{item.action}</h1>
                  </div>
                </Tooltip>
              </div>
            )
          })}
          
        </div>
      </div>
      <div className={style.btnCon}>
        <Button 
          text="next"
          handleClick={() => next()}
          />
      </div>
    </div>
    )
}

export default Shop
