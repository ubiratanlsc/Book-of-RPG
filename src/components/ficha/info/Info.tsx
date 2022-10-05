interface InfoProps {
     titulo: string;
     valor: string | number;
}
export function Info(props: InfoProps) {
     return (
          <div className="">
               <p className="">{props.titulo}</p>
               <p className="">{props.valor}</p>
          </div>
     )
}