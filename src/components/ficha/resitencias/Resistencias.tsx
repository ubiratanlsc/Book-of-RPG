interface ResistenciaProps {
     titulo: string,
     total: number,
     modificador: number,
     meio: number,
     outros: number,
}

export function Resistencias(props: ResistenciaProps) {
     return (
          <div>
               <p className="">{props.titulo}</p>
               <p className="">{props.total}</p>
               <p className="">{props.meio}</p>
               <p className="">{props.modificador}</p>
               <p className="">{props.outros}</p>
          </div>
     )
}