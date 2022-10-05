interface HabilidadesProps {
     tituloHab: any ,
     valor: number,
     modificador: number,
}
export function Habilidades(props: HabilidadesProps) {
     return (
          <>
               <div className="habGeral flex">
                    <p className="tHab">{props.tituloHab}</p>
                    <p className="valorAtri">{props.valor}</p>
                    <p className="ModHab ">{props.modificador}</p>
               </div>
          </>
     )
}