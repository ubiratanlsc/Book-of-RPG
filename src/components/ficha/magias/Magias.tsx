interface MagiasProps{
    magia: string,
    description?: string,


}

export function Magias(props: MagiasProps) {
    return (
        
            <p className="">{props.magia}</p>

    )
}