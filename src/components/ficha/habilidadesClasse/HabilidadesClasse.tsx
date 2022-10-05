interface HabilidadesProps {
     habilidades: string,
     // descrição?: string
}

export function HabilidadesClasse(props: HabilidadesProps) {
     return (

          <p className="valorHab habValor1">{props.habilidades}</p>
     )
}