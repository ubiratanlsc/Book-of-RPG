import { TextInput } from "@mantine/core";

interface PontosProps {
     titulo: string;
     valor: string | number;
}

export function Pontos(props: PontosProps) {
     return (
               <div className="pontos-container glassblack">
                    <div className="">{props.titulo}</div>
                    <TextInput
                    placeholder={props.titulo}
                    withAsterisk
                    variant="unstyled"
                    value={props.valor}
               />
               </div> 
     )
}