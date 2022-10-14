import React from 'react'
interface ArmaduraProps {
     armadura: string;
     bonusCA: number;
     destrezaMaxima: number;
     penalidadeArmadura: number;

}

export function Armaduras(props: ArmaduraProps) {
     return (
          <div className="">
               <p className="">{props.armadura}</p>
               <p className="">{props.bonusCA}</p>
               <p className="">{props.destrezaMaxima}</p>
               <p className="">{props.penalidadeArmadura}</p>
          </div>
     )
}