import React, {useState,useEffect} from "react";
import style from "./shop.module.css";
import { items } from "./items";
import  Button  from "../../buttons/buttons";
import {Tooltip} from '@mui/material';
 


function Shop(props){

  const handleStyle = (cost) => {
    const potionStyle = [style.potion]
    if(cost > props.hero.gold+100) potionStyle.push(style.gray)
    else potionStyle.push(style.actionBox)
    return potionStyle.join(" ")
  }
  const drinkPotion = (item) =>{}

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
                    onClick={() => drinkPotion(item)}
                    className={[handleStyle(item.cost),style[item.color]].join(" ")}>
                    <h1>{item.action}</h1>
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
          handleClick={() => props.next()}
          color="red"
          />
      </div>
    </div>
    )
}

export default Shop
