import { Input, Space, Text, TextInput } from "@mantine/core";

interface InfoProps {
     titulo: string;
     valor: string | number;
}
export function Info(props: InfoProps) {
     return (
          <div className="infodiv glassblack">
               <div className="p">{props.titulo}</div>
               <TextInput
                    placeholder={props.titulo}
                    withAsterisk
                    variant="unstyled"
                    value={props.valor}
               />
          </div>
     )
}