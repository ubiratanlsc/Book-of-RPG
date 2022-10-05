import { useEffect, useState } from "react"
import Api from "../services/api"

export const periciasGraduadas = [
     { nome: "acrobacia", habilidadeChave: "destreza", penalidade: true },
     { nome: "Adestrar Animais*", habilidadeChave: "carisma", penalidade: false },
     { nome: "Atletismo", habilidadeChave: "forca", penalidade: true },
     { nome: "Atuação", habilidadeChave: "carisma", penalidade: false },
     { nome: "Calvalgar", habilidadeChave: "destreza", penalidade: false },
     { nome: "Conhecimento", habilidadeChave: "inteligencia", penalidade: false },
     { nome: "Cura", habilidadeChave: "sabedoria", penalidade: false },
     { nome: "Diplomacia", habilidadeChave: "carisma", penalidade: false },
     { nome: "Enganação", habilidadeChave: "carisma", penalidade: false },
     { nome: "Furtividade", habilidadeChave: "destreza", penalidade: true },
     { nome: "Identificar Magia*", habilidadeChave: "inteligencia", penalidade: false },
     { nome: "Iniciativa", habilidadeChave: "destreza", penalidade: false },
     { nome: "Intimidação", habilidadeChave: "carisma", penalidade: false },
     { nome: "Intuição", habilidadeChave: "sabedoria", penalidade: false },
     { nome: "Ladinagem*", habilidadeChave: "destreza", penalidade: true },
     { nome: "Obter Informação", habilidadeChave: "carisma", penalidade: false },
     { nome: "Ofício", habilidadeChave: "inteligencia", penalidade: false },
     { nome: "Oficio", habilidadeChave: "inteligencia", penalidade: false },
     { nome: "Percepção", habilidadeChave: "sabedoria", penalidade: false },
     { nome: "Sobrevivencia", habilidadeChave: "sabedoria", penalidade: false },
     { nome: "____________", habilidadeChave: "sabedoria", penalidade: false },
]

// export const mod = modificador(chars[`${elementSelect(props.nome)[0]}`])

export function elementSelect(nome: any) {
     let retorno = []
     for (let index = 0; index < periciasGraduadas.length; index++) {
          if (nome == periciasGraduadas[index].nome) {
               retorno.push(`${periciasGraduadas[index].habilidadeChave}`)
               retorno.push(`${periciasGraduadas[index].penalidade}`)
               // retorno = chars.periciasGraduadas[index].habilidadeChave
          }
     };
     return retorno
}

export function modificador(valor: number) {
     return (
          Math.trunc((valor - 10) / 2
          ))

}
export function periciaTotal(boleano: boolean, habilidade: number, nivel: number, outros: number, penalidade: boolean, penalidades: number | any) {
     const meionv = Math.trunc(nivel / 2);
     const modificadores = modificador(habilidade)

     let penalidadeAplicada
     penalidade == true ? penalidadeAplicada = penalidades : penalidadeAplicada = 0
     let finaly

     if (boleano == true) {
          if (penalidade == true) {
               finaly = modificadores + nivel + 3 + outros - penalidadeAplicada
          }
          finaly = modificadores + nivel + 3 + outros
     } else {
          finaly = modificadores + meionv + outros - penalidadeAplicada
     }
     return finaly
}
export function resistencia(nivel: number, outros: number, modificador: number) {
     const meionv = Math.trunc(nivel / 2)
     return modificador + meionv + outros
}
export function meionv(nivel: number) {
     return Math.trunc(nivel / 2)
}
export function graduacao(nivel: number, graduacao: boolean) {
     let result 
     if (graduacao == true) {
          result = nivel + 3
     } else {
          result = Math.trunc(nivel / 2);
     }
     return result;
}