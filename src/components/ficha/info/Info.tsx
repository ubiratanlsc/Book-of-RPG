import { Input, Space, Text } from "@mantine/core";

interface InfoProps {
     titulo: string;
     valor: string | number;
}
export function Info(props: InfoProps) {
     return (
          <div className="infodiv glassblack">
               <div className="p">{props.titulo}</div>
               <div className="p">{props.valor}</div>
          </div>
     )
}