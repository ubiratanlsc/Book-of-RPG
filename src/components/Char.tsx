import { useEffect, useState } from 'react'
import Api from '../services/api'
import '../assets/css/style.css'
import { modificador, meionv, resistencia, graduacao, elementSelect, periciasGraduadas } from '../funcoes/Funcoes'
import { Habilidades } from './ficha/habilidades/Habilidades'
import { Info } from './ficha/info/Info'
import { Pontos } from './ficha/pontos/Pontos'
import { Resistencias } from './ficha/resitencias/Resistencias'
import { Ataque } from './ficha/ataque/Ataque'
import { ClasseArmadura } from './ficha/classeArmadura/ClasseArmadura'
import { HabilidadesClasse } from './ficha/habilidadesClasse/HabilidadesClasse'
import { Armaduras } from './ficha/armadura/Armaduras'
import { Magias } from './ficha/magias/Magias'
import { Pericias } from './ficha/pericias/Pericias'
interface charsProps {
  id: string,
  nome: string,
  raca: string,
  classe: string,
  genero: string,
  tamanho: string,
  deslocamento: string,
  tendencia: string,
  divindade: string,
  nivel: number,
  idade: string,
  forca: number,
  destreza: number,
  constituicao: number,
  inteligencia: number,
  sabedoria: number,
  carisma: number,
  pontosVida: number,
  pontosMagia: number,
  reducaoDano: string,
  recistenciaEnergia: [],
  fortitude: number,
  reflexo: number,
  vontade: number,
  bba: [],
  habilidadesRacaEClasse: [],
  armaduras: [],
  pericias: any,
  boolean: boolean,
  valor: number,
  penalidade: number,
  keyss: any
  habilidade: string,
  talentosMagias: any,
  talento: any,
  magia: any,
  destrezaMaxima: number,
  Armaduras: number,
}

export function Char(props: charsProps) {


  const [chars, setChars] = useState(props)
  const id = '6333b2108e6ab09e43afaf8a'

  useEffect(() => {
    Api
      .get(`chars/${id}`)
      .then(response => setChars(response.data))
  }, [])
  console.log(chars);
  let keyss = Object.keys(chars);
  // console.log(chars.keyss[0]);


  return (
    <>
      <div>
        <header>
          <h1 className="names">{chars.nome}</h1>
        </header>
        <section>
          <div className='tudo'>
            <section className="info glass">
              <Info titulo="Raça" valor={chars.nome} />
              <Info titulo="Classe" valor={chars.classe} />
              <Info titulo="Tendencia" valor={chars.tendencia} />
              <Info titulo="Tamanho" valor={chars.tamanho} />
              <Info titulo="Idade" valor={chars.idade} />
              <Info titulo="Divindade" valor={chars.divindade} />
              <Info titulo="Deslocamento" valor={chars.deslocamento} />
              <Info titulo="Nível" valor={chars.nivel} />
            </section>
            <section className="pontos glass">
              <Pontos titulo="Pontos de Vida" valor={chars.pontosVida} />
              <Pontos titulo="Pontos de Mana" valor={chars.pontosMagia} />
              <Pontos titulo="Redução de Dano" valor={chars.reducaoDano} />
              <Pontos titulo="Pontos de Mana" valor={chars.pontosVida} />
              <Pontos titulo="Pontos de Mana" valor={chars.pontosVida} />
              <Pontos titulo="Pontos de Mana" valor={chars.pontosVida} />
            </section>
            <div className="habilidades glass">
              <p className="">Habilidades</p>
              <div className="habsLegenda flex">
                <p className="habLegenda titulos">Habilidade</p>
                <p className="valorLegenda titulos">Valor</p>
                <p className="ModHabLegenda titulos">Mod. Hab</p>
              </div>
              <Habilidades tituloHab={"Força"} valor={chars.forca} modificador={modificador(chars.forca)} />
              <Habilidades tituloHab={"Destreza"} valor={chars.destreza} modificador={modificador(chars.destreza)} />
              <Habilidades tituloHab={"Constituição"} valor={chars.constituicao} modificador={modificador(chars.constituicao)} />
              <Habilidades tituloHab={"Sabedoria"} valor={chars.sabedoria} modificador={modificador(chars.sabedoria)} />
              <Habilidades tituloHab={"Inteligencia"} valor={chars.inteligencia} modificador={modificador(chars.inteligencia)} />
              <Habilidades tituloHab={"Carisma"} valor={chars.carisma} modificador={modificador(chars.carisma)} />
            </div>
            <section className="resistencias glass">
              <div className="resistenciasTitulo glassblack">
                <p className=""></p>
                <p className=" titulos">Total</p>
                <p className=" titulos">&frac12; Nv</p>
                <p className=" titulos">Hab</p>
                <p className=" titulos">Outros</p>
              </div>
              <Resistencias titulo="Fortitude" total={resistencia(chars.nivel, modificador(chars.constituicao), chars.fortitude)} meio={meionv(chars.nivel)} modificador={modificador(chars.constituicao)} outros={chars.fortitude} />
              <Resistencias titulo="Reflexo" total={resistencia(chars.nivel, modificador(chars.destreza), chars.reflexo)} meio={meionv(chars.nivel)} modificador={modificador(chars.destreza)} outros={chars.reflexo} />
              <Resistencias titulo="Vontade" total={resistencia(chars.nivel, modificador(chars.sabedoria), chars.vontade)} meio={meionv(chars.nivel)} modificador={modificador(chars.sabedoria)} outros={chars.vontade} />

            </section>
            <section className="ca glass">
              <ClasseArmadura total={5} meio={5} destreza={5} bonusArmadura={5} bonusEscudo={5} tamanho={5} outros={5} />
            </section>
            <section className="ataque glass">
              <p className="tipoAtaque titulos">Corpo a Corpo</p>
              <div className="atqlegendas">
                <p className="valorAt">Arma</p>
                <p className="valorAt">Total</p>
                <p className="valorAt">BBA</p>
                <p className="valorAt">Modificador</p>
                <p className="valorAt">Mod. Taman</p>
                <p className="valorAt">Outros</p>
              </div>
              <Ataque arma="Espada longa" total={10} bba={5} modificador={4} tamanho={0} outros={0} />
              <Ataque arma="Espada longa" total={10} bba={5} modificador={4} tamanho={0} outros={0} />
              <Ataque arma="Espada longa" total={10} bba={5} modificador={4} tamanho={0} outros={0} />
            </section>
            <section className="armor glass">
              <p className=" titulos">Armadura e Escudos</p>
              <div className="">
                <p className="">Tipo</p>
                <p className="">Bônus na CA</p>
                <p className="">Max de Destreza</p>
                <p className="">Penalidade de Armadura</p>
              </div>{chars?.armaduras?.map((itens: charsProps, index: number) =>
                <Armaduras key={index} armadura={itens.nome} bonusCA={itens.Armaduras} destrezaMaxima={itens.destrezaMaxima} penalidadeArmadura={itens.penalidade} />
              )}
            </section>
            <section className="habilidadesClasse glass">
              <p className="titulo titulos">Habilidades de Classe e Raça</p>
              <div className="">
                {chars?.habilidadesRacaEClasse?.map((itens: charsProps, index: number) =>
                  <HabilidadesClasse key={index} habilidades={itens.habilidade} />)}
              </div>

            </section>
            <section className="magiasTalentos glass">
              <p className="titulo titulos">Talentos e Magias</p>
              <div>
                {chars?.talentosMagias?.map((itens: charsProps, index: number) =>
                  <Magias key={index} magia={itens.talento || itens.magia} />)}
              </div>
            </section>
            <section className="periciasSection glass">

              <div className="pericias">
                {chars?.pericias?.map((itens: charsProps, index: number) =>
                  < Pericias key={index}
                    nome={itens.nome}
                    outros={itens.valor}
                    booleano={itens.boolean} />

                )}
              </div>
            </section>
          </div>
        </section>





      </div>
    </>
  )
}

export default Char
