import "./App.css"
import palavras from "./palavras"
import imagem from "./img/forca0.png"
import imagem1 from "./img/forca1.png"
import imagem2 from "./img/forca2.png"
import imagem3 from "./img/forca3.png"
import imagem4 from "./img/forca4.png"
import imagem5 from "./img/forca5.png"
import imagem6 from "./img/forca6.png"
import imagem7 from "./img/forca6.png"
import imagem8 from "./img/forca6.png"
import imagem9 from "./img/forca6.png"
import imagem10 from "./img/forca6.png"

import { useState } from "react"
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min"

let imagemForca = [
    imagem, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6
]



let palavraCerta = ""
let novosItens = []
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let num = 0
let contador = 0
export default function App() {
    let [inputDesativado, setinputDesativado]=useState('desativado')
    let [valorInput, setvalorImput] = useState()
    let [letrasCertas, setletrasCertas] = useState([])
    let [mudarCor, setmudarCor] = useState("palavra-escondida")
    let [arrayClicadas, setarrayClicadas] = useState(alfabeto)

    // variável que sorteia a palavra ------------------------
    const arrDePalavras = palavras
    const sortearPalavra = Math.floor(Math.random() * arrDePalavras.length);
    const arrayComPalavraAleatória = arrDePalavras[sortearPalavra].normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const arrayDePalavras = arrayComPalavraAleatória.split('')
    // variável para renderizar os Underlines na tela --------


    let [arrayVaziaDeUnderlines, setarrayVaziaDeUnderlines] = useState([])

    const [arrayDeUnderlines, SetarrayDeUnderlines] = useState([])

    const [implementarArrayNova, SetimplementarArrayNova] = useState([])

    // variável para tirar e colocar o desativado -------------

    const [desativadoDaPalavra, SetdesativadoDaPalavra] = useState("escolher-palavra")






    function PalavraEscondida() {

        SetdesativadoDaPalavra("escolher-palavra desativado")
        setarrayClicadas([])
        setinputDesativado('')

        for (let i = 0; i < arrayDePalavras.length; i++) {

            arrayVaziaDeUnderlines.push("   _   ")

        }

        SetarrayDeUnderlines(arrayVaziaDeUnderlines)


        novosItens = arrayDePalavras
        console.log(novosItens)
        SetimplementarArrayNova(novosItens)
        console.log(novosItens)
    }

    function ColocarLetraNaTela(l, indice) {


        setarrayClicadas([...arrayClicadas, l])

        if (novosItens.includes(l)) {
            for (let i = 0; i < novosItens.length; i++) {
                if (l === novosItens[i]) {
                    letrasCertas.push(l)
                }
            }

        }
        else {
            contador++
            if (contador >= 6) {
                setmudarCor("palavra-escondida vermelho")
                setarrayClicadas(alfabeto)
                setletrasCertas(novosItens)
                setInterval(final, 100)
            }
        }
        if (letrasCertas.length === novosItens.length) {
            setarrayClicadas(alfabeto)
            setmudarCor("palavra-escondida verde")
            setInterval(final, 100)
        }
    }
    console.log(novosItens)
    palavraCerta = novosItens
    console.log(palavraCerta)

    function funcaoChute() {
        palavraCerta = palavraCerta.toString()
        palavraCerta = palavraCerta.replaceAll(',', '')
        console.log(novosItens)

        if (valorInput === palavraCerta) {
            setarrayClicadas(alfabeto)
            setletrasCertas(novosItens)
            setmudarCor("palavra-escondida verde")
        }
        else {
            setmudarCor("palavra-escondida vermelho")
            setarrayClicadas(alfabeto)
            setletrasCertas(novosItens)
        }
        console.log(valorInput, novosItens)
    }

    function final() {
        console.log('entrou função')
        if (palavraCerta.length === letrasCertas.length) {
            alert('Parabéns!!!!')
        }
        if (contador === 6) {
            console.log('segundo if')
            alert('perdeumenó')
        }
    }







    return (
        <div className='container'>
            <div className='parte-cima'>
                <div className='img-forca'>
                    <img src={imagemForca[contador]} alt='' />
                </div>
                <div>
                    <button className={desativadoDaPalavra} onClick={PalavraEscondida}>
                        Escolher palavra
                    </button>
                    <ul className={mudarCor}>
                        {console.log(novosItens)}
                        {novosItens.map((l) => (
                            <li>{letrasCertas.includes(l) ? l : "_"}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="parte-baixo">



                <div className="letras-caixa">
                    <ul className="letras">
                        {alfabeto.map((l, indice) => (
                            <button onClick={() =>
                                arrayClicadas.includes(l) ? "" : ColocarLetraNaTela(l)
                            }
                                className={arrayClicadas.includes(l) ? "desativado" : ""}> {l} </button>
                        ))}
                    </ul>
                </div>


                <div className="resposta">
                    <div className="sei-palavra">Ja sei a palavra !!</div>
                    <input placeholder="Digite seu palpite"

                        onChange={(event) => setvalorImput(event.target.value)} className={inputDesativado}/>

                    <div onClick={funcaoChute} className="chute">Chute</div>
                </div>
            </div>
        </div>

    )
}   