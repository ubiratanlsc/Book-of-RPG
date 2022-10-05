import { useEffect, useState } from "react";
import { elementSelect, graduacao, modificador, periciasGraduadas, periciaTotal } from "../../../funcoes/Funcoes";
import Api from "../../../services/api";
interface PericiasProps {
    key: number;
    nome: string,
    // grad: number,
    outros: number,
    booleano: boolean,
    // nivel: number,
}
interface charPropss {
    nivel: number,
    grad: number,
    chars: any,
    nome: string,
}
export function Pericias(props: PericiasProps, itens: charPropss) {
    const [isChecked, setIsChecked] = useState(props.booleano);
    const [chars, setChars] = useState(itens);
    const id = '6333b2108e6ab09e43afaf8a'

    useEffect(() => {
        Api
            .get(`chars/${id}`)
            .then(response => setChars(response.data))
    }, [])

    const handleChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div className="geral">
            <p className="nome">{props.nome}</p>
            <p className="total">{periciaTotal(isChecked, chars[`${elementSelect(props.nome)[0]}`], chars.nivel, props.outros, Boolean(elementSelect(props.nome)[1]), 2)}</p>
            <p className="grad">{graduacao(chars.nivel, isChecked)}</p>
            <p className="mod">{modificador(chars[`${elementSelect(props.nome)[0]}`])}</p>
            <p className="outros">{props.outros}</p>
            <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                <span className="slider round"></span>
            </label>
        </div>


    )
}