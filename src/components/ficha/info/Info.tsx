import { Input, Space, Text } from "@mantine/core";

interface InfoProps {
     titulo: string;
     valor: string | number;
}
export function Info(props: InfoProps) {
     return (
          <>
               <Text align="center" weight={700} size="lg">{props.titulo}</Text>
               <Space h={0} />
               <Input className="txt" variant="unstyled" placeholder={props.titulo} value={props.valor}
               />
          </>
     )
}