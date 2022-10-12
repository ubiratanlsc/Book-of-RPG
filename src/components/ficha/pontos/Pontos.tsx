interface PontosProps {
     titulo: string;
     valor: string | number;
}

export function Pontos(props: PontosProps) {
     return (
               <div className="pontos-container glassblack">
                    <div className="">{props.titulo}</div>
                    <div className="">{props.valor}</div>
               </div> 
     )
}