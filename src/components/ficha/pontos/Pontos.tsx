interface PontosProps {
     titulo: string;
     valor: string | number;
}

export function Pontos(props: PontosProps) {
     return (
          <>
               <div className="pv ">
                    <p>{props.titulo}</p>
                    <p>{props.valor}</p>
               </div>
               {/* <div className="pm ">
                    <p>{props.titulo}</p>
                    <p>{props.valor}</p>
               </div>
               <div className="rd ">
                    <p>{props.titulo}</p>
                    <p>{props.valor}</p>
               </div>
               <div className="pe ">
                    <p>{props.titulo}</p>
                    <p>{props.valor}</p>
               </div>
               <div className="dn ">
                    <p>{props.titulo}</p>
                    <p>{props.valor}</p>
               </div>
               <div className="pe ">
                    <p>{props.titulo}</p>
                    <p>{props.valor}</p>
               </div> */}
          </>

     )
}