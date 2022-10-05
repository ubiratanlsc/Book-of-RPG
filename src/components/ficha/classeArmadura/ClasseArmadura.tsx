interface ArmaduraProps {
     total: number,
     meio: number,
     destreza: number,
     bonusArmadura: number,
     bonusEscudo: number,
     tamanho: number,
     outros: number,
     
}
export function ClasseArmadura(props: ArmaduraProps) {

     return (
          <>
               <div className="classeArmadura titulos">
                    Classe de Armadura
               </div>
               <div className="atributosCA">
                    <div className="totalCa">
                         <p className="CaLegenda titulos">Total</p>
                         <p className="CaNumero caTotalValor">{props.total}</p>
                    </div>
                    <div className="meioNv">
                         <p className="CaLegenda ">Base</p>
                         <p className="CaNumero caNivelValor">10</p>
                    </div>
                    <div className="meioNv">
                         <p className="CaLegenda ">&frac12; do Nível</p>
                         <p className="CaNumero caNivelValor">{props.meio}</p>
                    </div>
                    <div className="modHabCA">
                         <p className="CaLegenda ">Mod. Habilidade</p>
                         <p className="CaNumero caModValor">{props.destreza}</p>
                    </div>
                    <div className="bArmadura">
                         <p className="CaLegenda ">Bônus de Armadura</p>
                         <p className="CaNumero caBonusArmValor">{props.bonusArmadura}</p>
                    </div>
                    <div className="bEscudo">
                         <p className="CaLegenda ">Bônus de Escudo</p>
                         <p className="CaNumero caBonusEscValor">{props.bonusEscudo}</p>
                    </div>
                    <div className="modTamCa">
                         <p className="CaLegenda ">Mod. Tam</p>
                         <p className="CaNumero caBonusTamValor">{props.tamanho}</p>
                    </div>
                    <div className="outrosCa">
                         <p className="CaLegenda ">Outros</p>
                         <p className="CaNumero caOutValor">{props.outros}</p>
                    </div>
               </div>
          </>
     )

}