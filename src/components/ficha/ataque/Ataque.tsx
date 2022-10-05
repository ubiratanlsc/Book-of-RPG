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
          <>
               <div className="corpoacorpo 1">
                    <p className="valorAt">{props.arma}</p>
                    <p className="valorAt cac1TotalValor1">{props.total}</p>
                    <p className="valorAt cac1BbaValor1">{props.bba}</p>
                    <p className="valorAt cac1ModValor1">{props.modificador}</p>
                    <p className="valorAt cac1TamValor1">{props.tamanho}</p>
                    <p className="valorAt cac1OutlValor1">{props.outros}</p>
               </div>
          </>
     )
}