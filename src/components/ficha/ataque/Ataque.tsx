import React from 'react'
interface AtaqueProps {
     arma: string,
     bba: number,
     total: number,
     modificador: number,
     tamanho: number,
     outros: number

}
export function Ataque(props: AtaqueProps) {
     return (
               <div className="ataque-2 glassblack">
                    <div className="valorAt">{props.arma}</div>
                    <div className="valorAt cac1TotalValor1">{props.total}</div>
                    <div className="valorAt cac1BbaValor1">{props.bba}</div>
                    <div className="valorAt cac1ModValor1">{props.modificador}</div>
                    <div className="valorAt cac1TamValor1">{props.tamanho}</div>
                    <div className="valorAt cac1OutlValor1">{props.outros}</div>
               </div>
     )
}